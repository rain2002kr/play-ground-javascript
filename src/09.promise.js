'use strict'
const log = (m) => {
    console.log(m)
};
const clr = () => {
    console.clear()
}; {
    log("Promise START")

    function login(id, pass) {
        return new Promise((resolve, reject) => {
            log('Promise Start function')
            setTimeout(() => {
                if (id == "khlee" && pass == "123") {
                    resolve(id)
                } else {
                    reject(new Error("not found user"))
                }
            }, 500);
        })
    }
    login("khlee", 123)
        .then((id)=>log(id))
        .catch(log)
        .finally(()=>log(`무조건 실행 `))

    // let cnt=0 ;
    // setInterval(() => {
    //     log(cnt++)
    // }, 1000);
}
// PROMISE 체이닝
{
    clr();
    log('Promise 체이닝')
    class User {
        login(id,pass){
            return new Promise((resolve, reject) => {
                log('Promise Start function')
                setTimeout(() => {
                    if (id == "khlee" && pass == "123") {
                        resolve(id)
                    } else {
                        reject(new Error("not found user"))
                    }
                }, 3000);
            })
        }
        rolecheck(id){
            return new Promise((resolve,reject)=>{
                log("ROLE CHECK")
                setTimeout(() => {
                    if(id=="khlee"){
                    resolve('admin')
                }else {
                    reject(new Error('no role'))
                }
                }, 2000);
            })
        }
    }
    const user = new User();
    user.login("khlee",123).then(id=>user.rolecheck(id)).then(log).catch(log)

}

