# 자바스크립트 정리 

# Async 와 Defer
    브라우저가 HTML 문서를 파싱 할때, 스크립트 파일을 파싱 할때 병렬 처리에 대한 옵션 입니다. 
        async : 병렬로 다운 받고, 실행 할때 먼저 받은 파일 부터 실행 
        defer : 병렬로 다운 받고, 실행 할때 스크립트 써있는 순서대로 실행 

# 변수 
    let : mutable data type ( 메모리 주소값 저장 )
    const : immutable data type ( 메모리 주소값 저장, locked 변경 안됨.)
        - 안전, 쓰레드 유리, 권장 
    var : ES6 이전 에 사용 ( var hosisting 때문에 이상 동작 야기, 사용 하지 말것 )
    bitint : 123455.....n 새로운 기능 
    string : 백틱 사용 
    boolen : null, undefined, NaN (not a number ) ex) string / 2 혹은 0 / 1 이런 것들이 NaN 야기  
    symbol : Symbol 로 같은 이름을 붙여도 메모리 주소값이 다름. 

    다이나믹 타이핑 언어 : 타입 스크립트 권장.

# JSON 
    OBJ TO JSON 
        JSON.stringfy(obj) 
        JSON.stringfy(obj,['replacer']) 
        JSON.stringfy(obj,(key,value)=>value==="first_key"?"replacer":value) 
         

    JSON TO OBJ 
        JSON.parse(json) 
        JSON.parse(json,(key,value)=>value==="first_key"?"replacer":value)

# CALLBACK 
    이벤트 루프 
        이벤트 발생시, 호출할 콜백 함수들을 관리하고, 호출된 콜백 함수의 실행 순서를 결정하는 역활을 합니다. 
        노드가 종료 될때 까지 이벤트 처리를 위한 작업을 반복하므로 루프라고 부릅니다. 

    백그라운드 
        setTimeout 같은 타이머나 이벤트 리스너들이 대기 하는 곳입니다. 
        자바스크립트가 아닌 다른 언어로 작성된 프로그램이라고 봐도 됩니다. 여러 작업이 동시에 실행 될수 있습니다. 

    태스트 큐
        이벤트 발생후, 백그라운드에서는 태스트큐로 타이머나 이벤트 리스너의 콜백 함수를 보냅니다. 
        정해진 순서대로 콜백들이 줄을 서 있으므로 콜백 큐라고도 부릅니다. 콜백들을 보통 완료된 순서대로 줄을 서 있지만 특정한 순서가 바뀌기도 합니다. 

# Promise 
    콜백과 다르게 입력 (id,passwd) 로 호출
    리턴 타입으로 Promise(resolve,rejected) 두가지 값을 리턴으로 돌려준다. 

    loginUser(id,passwd){
        return new Promise(resolve,rejected){ resolve() rejected()}
    }
    loginUser(id,passwd).then((user)=> {log(user)})
    
    




