"use strict"; 
const log = (m) => console.log(m);
const clr = () => console.clear();
{
  log("START FC ");
  function defaultFc(message="default message"){
    log(message)
  }
  defaultFc();
  defaultFc("without default message");

  // REST PARAMETER
  function restFc(...arg){
    for(let m of arg){
      log(m)
    }
    
  }
  restFc("test", "rest", "message");

  // named FC and unnamed FC 
  function namedFc() {log("named fc")} 
  namedFc();
  
  // IFEE FC
  (function(){
      log('IFEE FC');
    }
  )();
}
// ARROW FC 
// skip the function, return 
{
  clr();
  log('START ARROW FC')

  // noinput value
  const arrow = ()=>log('arrow fc');
  arrow();

  // input value
  const arrow2 = (message) => {log(message);}
  arrow2('test message');
}
// Constructor FC
{
  clr();
  log('CONSTRUCTOR FC');
  function Person(name,age){
    if(age < 0){
      age = 0;
    }
    
    function intro(){
      log(`나의 이름은 ${this.name}`);
      log(`나의 나이는 ${this.age}`);
    }
    const m=()=> {log(`나의 이름은 ${name}`) ; }
    return {name, age, intro,m};
  }

  const khlee = Person("leekh",-39);
  log(khlee.name);
  khlee.intro();
  khlee.m();
  khlee.age = 30;
  khlee.intro();
  // 접근해서 셋하는것은 못막음
  khlee.age = -5;
  khlee.intro();


  







}

