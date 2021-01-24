//유용한 사이트
// 1. JSON Diff.com : 서버에서 온 데이터를 비교하는 사이트
// 2. JSON Beautifier : 서버에서 가져온 데이터가 망가진 JSON 을 아름답게 정렬
// 3. JSON Parser : JSON 형태를 오브젝트 형태로 어떻게 표기되어지는지 보여주는 사이트
// 4. JSON Validateor : JSON 데이터가 유효한지 나태 내주는 사이트
// 5. Learning Tools : JSON to CSV .... 많은 유효한 트릭들이 있음.

const log = (m) => console.log(m);
const clr = () => console.clear();
//Person 오브젝트 
const Person1 = {
  name: "khlee",
  job: "Programmer",
  age: "38",
  birthDate: new Date(),
  introduce : function introduce(name,age,job){
    log(`${this.name} 입니다. 나이는 ${this.age}이고 직업은 ${this.job} 입니다.`)
  }
};
//JSON.stringyfy
//JSON.parse

// 1. JSON stringyfy
// OBJECT -> JSON
log(Person1);
log(Person1.birthDate);
log(Person1.introduce());

log("START JSON stringyfy");
// value, replacer 를 이용 할때, []배열에 key값을 주는 방법 
//const json2 = JSON.stringify(Person1, ["name","age"]);
const json2 = JSON.stringify(Person1);
log(json2);

// value, replacer 를 이용 할때, 콜백 함수를 이용하는 방법 
// 변혀을 주고 싶을때 콜백 함수 사용 
// 특이 한게 key와 value의 리턴중 최초 콜백함수 리턴 1회는 아무값도 안들어 온다. 
const json = JSON.stringify(Person1, (key, value) => {
  //  log("START CallBack in JSON strigify");
  log("콜백 함수 "+key);
  log(`key :${key}, value:${value}`);
  return value === "name" ? "khlee" : value;
  // switch (value) {
  //   case "name":
  //     return "khlee";
  //   default:
  //     return value;
  // }
});
log(json);

// 2. JSON parse
// JSON -> OBJECT
//clr();
log("START JSON parse");
const obj2 = JSON.parse(json);
log(obj2);

const obj = JSON.parse(json, (key, value) => {
  log("START CallBack in JSON parse");
  log(`key :${key}, value:${value}`);
  switch (key) {
    case "birthDate":
      return new Date(value);
    case "introduce":
      return function(){return value};
    default:
      return value;
  }
});
log(obj);
log(obj.birthDate);

//Person 함수 
clr();
class Person{
  // 생성자 함수
  constructor(name,job,age){
    this.name=name;
    this.job=job;
    this.age=age;
  }
  // 변수 : const 혹은 let 같이 미리 데이터 변수를 만들수는 없다. 
  birthDate  = new Date();
  
  // 함수
  introduce(){
    log("PERSON 함수 INTRODUCE");
    log(`${this.name} 입니다. 나이는 ${this.age}이고 직업은 ${this.job} 입니다.`);
  };
}

function personFc(name,job,age){
  const birthDate  = new Date();
  const intro = () => {log(`나의 살던 고향은  ${name} 꽃피는 산골`)}; 
  //function namedfc(){log("test");}
  return {name,job,age,birthDate,intro};
}

const cjs = personFc("cjs","nurse","39");
log("START PERSON 함수");

 log(cjs.name);
 log(cjs.job);
 log(cjs.age);
 log(cjs.birthDate);
 cjs.intro();
 //cjs.namedfc();
  const json_cjs =JSON.stringify(cjs);
  log(json_cjs);
  const gson_cjs = JSON.parse(json_cjs,(key,value)=>{
    log(`key :${key}, value:${value}`);
    return key === "job" ? "test" : value;
  // switch (key) {
  //   case "birthDate":
  //     return new Date(value);
  //   case "job":
  //     return "test"
  //   default:
  //     return value;
  //}
  });
  log(gson_cjs);
  /* const array = [];
  array.push(cjs);
  array.push(cjs);
  log(array);
  array.push(cjs);
  log(array); */
  
// const lee = new Person("khlee","38","programmer");
// log("START PERSON 함수");
// log(lee.introduce());
// log(lee.name);
// log(lee.job);
// log(lee.age);
// log(lee.birthDate);
//const json_lee = JSON.stringify(lee,["name","age","birthDate"]);
// const json_lee = JSON.stringify(lee,(k,value)=>{
//   return value === "name" ? "" : value;
// });
// log(json_lee);






