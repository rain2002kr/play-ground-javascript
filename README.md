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

# Test branch



