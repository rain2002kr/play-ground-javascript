'use stric';
'use strict'
const log = (m) => {
    console.log(m)
};
const clr = () => {
    console.clear()
};

// 클래스 타입 콜백 
class UserBlock {
    callback() {
        const message = " Function cb"
        log(message);
        return message;
    }
    errorMessage(message) {
        return new Error(message);
    }
    loginUser(id, passwd, success, error) {
        if (id == "khlee" && passwd == "123") {
            success(this.callback())
        } else {
            error(errorMessage('login user is not founded'))
        }
    }
}

function cb() {
    const message = " Function cb"
    log(message);
    return message;
}

function errorMessage(message) {
    return new Error(message);
} 

{
    // 콜백의 입력과 출력을 알기가 어려움.
    function callback(id, passwd, ok, err) {
        if (id == "khlee" && passwd == "123") {
            ok(cb()); //같은 이름의 콜백함수를 호출하면 매개변수에 있는 함수 혹은 변수를 리턴 한다. 
        } else {
            err(errorMessage("name is not founded"));
        }
    }

    callback("khlee", 123,
        (id) => {
            log("call back" + id)
        },
        (error) => {
            log(error)
        });

    
    const userBlock = new UserBlock();
    
    userBlock.loginUser("khlee", "124", (cb) => {
        log(cb)
    }, (err) => {
        log(err)
    });



}