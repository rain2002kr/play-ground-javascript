'use stric';
'use strict'
const log = (m)=>{console.log(m)};
const clr = ()=>{console.clear()};
{
    class Person{
        login(id,pass){
            return new Promise((resolve,rejected) => { 
                if(id=="khlee" && pass=="123"){
                    resolve(id)
                }else{
                    rejected(new Error("not match"))
                }
            });
        }
    }
            
    const person = new Person();
    person.login("khlee","123")
        .then((id)=>log(id));

    

}
