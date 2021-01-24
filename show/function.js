// Function

// 1. Function declaration
// 함수네이밍은 : doSomething, command, verb
// e.g createCardAndPoint -> createCard, createPoint
// function 은 오브젝트 이다.

function log(message) {
  console.log(message);
}
log("hello");

// 2. Parameters
// premitive parameters : passed by value
// object parameters : passed by reference

function changName(obj) {
  obj.name = "coder";
}

function changAge(obj) {
  obj.age = "20";
}

function changeNumber(obj) {
  obj.age = Number(obj.age);
}
const khlee = {
  name: "khlee",
  age: 18
};
log(khlee);
changName(khlee);
changAge(khlee);
log(khlee);
changeNumber(khlee);
log(khlee);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "test") {
  log(`${message} by ${from}`);
}

showMessage("Hi");

// 4. Rest paramters  (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    log(args[i]);
  }
  //for a of loops
  for (const arg of args) {
    log(arg);
  }
  //forEach
  args.forEach((arg) => {
    log(arg);
  });
}
printAll("nice", "come", "very", "good");

// 5. Local scope
// 밖에서는 안이 보이지않고, 안에서만 밖을 볼수 있다.
// {} 안에서만 작동, {} 밖에 선언된 변수는 안과 밖에서 사용 가능.
let globalMessage = "global"; // global variable

// 6. Return a value

// 7. Early return, early exit
// bad code
{
  function upgradeUser(user) {
    if (user.point > 10) {
      //long upgrade logic...
    }
  }
}
// good code, 조건이 만족하지 않으면 바로 리턴 시킨다.
{
  function upgradeUser(user) {
    if (user.point <= 10) {
      return;
    }
    //long upgrade logic...
  }
}

// 함수의 변수화 First-class function
// 값으로 사용 가능하고, 파라메터로 전달가능하며, 다른 펑션의 리턴 값으로 전달
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted) 이것이 가장 큰 차이~!!호이스트
// a function express is create when the execuction reaches it.

const print = function () {
  // anonymous fuction 익명 함수
  log("print");
};

print();
const printAgain = print;
printAgain();

// 2. CallBack function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
// anonymous fucntion
const printYes = function () {
  log("yes");
};
// named fucntion
// better debugging in debugger's tack traces
// recursions
const printNo = function print() {
  log("no");
  //print(); // recursions
};

randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function 화살표 펑션
// 항상 anonymous

const simplePrint = () => log("simplePrint");
const add = (a, b) => a + b;
log(add(3, 4));

const simpleMultiplay = (a, b) => {
  //do something more
  return a * b;
};

// IIFF : Immediately Invoked function expression
// 한번 사용하고 쓰지 않는 펑션이나, 테스트 사용 할때
(function hello() {
  log("IIFE");
})();

const cal = function calculate(cmd, a, b) {
  switch(cmd) {
    case "add":
      add2(a, b)
      break;
    case "sub":
      sub2(a, b)
      break;
    case "div":
      div2(a, b)
      break;
    case "mul":
      mul2(a, b)
      break;
    default:
      console.log('error');
      break;
  }
}

const add2 = (a, b) => console.log(`a + b = ${a+b}`);
const sub2 = (a, b) => console.log(`a - b = ${a-b}`);
const div2 = (a, b) => console.log(`a / b = ${a/b}`);
const mul2 = (a, b) => console.log(`a * b = ${a*b}`);

cal("div",8,4);


//IIFE Test
( ()=>console.log("IIFE Test") )();


// . Constuctor function 함수 
function Person(name, age) {
  return {
    name,
    age,
  };
}
log(person4);

const person5 = new Person1("ccccs", 33);

log('PERSON5');
log(person5);

// 4. Constuctor function
function Person1(name, age) {
  // this = {}; 이게 생략
  this.name = name;
  this.age = age;
  // return this; // 이게 생략
}