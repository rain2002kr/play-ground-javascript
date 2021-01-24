// 1. String concatenation
function p(data) {
  console.log(data);
}

p("my" + "cat");
p("1" + 2);
p(`stinrg literals: 1+2 = ${1 + 2}`);

// 2. Nummeric operators
p(1 + 1); //add
p(1 - 1); //substract
p(1 / 1); //devide
p(1 * 1); //multiply
p(5 % 2); //나머지 remainder
p(2 ** 3); // exponentiation  배수

// 3. 증가 감소 연산자
let count = 2;
const preIncrement = ++count;
p(`preIncrement : ${preIncrement}`);
const postIncrement = --count;
p(`postIncrement : ${postIncrement}`);

// 4. Asignment operators
let x = 3;
let y = 6;

x += y; // x = x + y ;
x -= y; // x = x - y ;
x *= y; // x = x * y ;
x /= y; // x = x / y ;

// 5. 비교연산자
p(10 < 6); // less then
p(10 <= 6);
p(10 > 6);
p(10 >= 6);

// 6. logical operators : || (or), &&(and) , !(not)
// or 는 처음에 true 이면 뒤에 연산을 멈추기 때문에 빠르게 연산 되는 놈을 앞으로 넣는다.
// and 는 역시 헤비한 오퍼레이션은 맨뒤로...

//7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equaltiy, with type conversion
p(`== stringFive numberFive 검사: ${stringFive == numberFive}`);

// === strice  equaltiy, with no type conversion
p(`=== stringFive numberFive 검사: ${stringFive === numberFive}`);

// 오브젝트 equaltiy by reference
const khlee1 = { name: "khlee" };
const khlee2 = { name: "khlee" };
const khlee3 = khlee1;

p(`== khlee1 khlee2 검사: ${khlee1 == khlee2}`); //값은 같지만 레퍼런스 주소가 다르기때문에 false
p(`=== khlee1 khlee2 검사: ${khlee1 === khlee2}`); //값은 같지만 레퍼런스 주소가 다르기때문에 false
p(`=== khlee1 khlee3 검사: ${khlee1 === khlee3}`);
p(`=== khlee1 khlee2 이름 검사: ${khlee1.name === khlee2.name}`);

p(`== 0  false 검사: ${0 == false}`);
p(`=== 0  false 검사: ${0 === false}`);
p(`== ''  false 검사: ${"" == false}`);
p(`=== ''  false 검사: ${"" === false}`);
p(`== null  undefined 검사: ${null == undefined}`);
p(`=== null  undefined 검사: ${null === undefined}`);

// 8. Conditional operators
// if, else if, else
const name = "khlee"; //변수

if (name === "khlee") {
  p("welcome khlee");
} else if (name === "cjs") {
  p("welcome cjs");
} else {
  p("welcome unknown people!");
}

// 9. Ternary operator : ?
// condition ? value1 : value2;
// 간단하게 사용할때만 사용!
p(name === "khlee" ? "yes" : "no"); //조건 ? 참 : 거짓

// 10. switch statement
const browser = "IE";

switch (browser) {
  case "IE":
    p("go away!");
    break;
  case "Chrome":
  case "Firefox":
    p("love you!");
    break;
  default:
    p("same all");
    break;
}

// 11. Loops

// while loop, while the condition is truthy,
// body code is executed.
{
  let i = 3;
  while (i > 0) {
    p(`while: ${i}`);
    i--;
  }
}
// do while loop, body code is executed first,
// then check the condition
{
  let i = 3;
  do {
    p(`do while: ${i}`);
    i--;
  } while (i > 0);
}

// for loop, for(begin, condition, step)
{
  let i;
  for (i = 3; i > 0; i--) {
    p(`for: ${i}`);
  }
}

// neted loop
// 좋지 않은 방법
{
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      p(`for: i :${i}, j :${j}`);
    }
  }
}

// break , continue
// Q1. 반복문 0~10 출력 하는데 짝수만 출력
{
  for (let i = 0; i < 11; i++) {
    if (i % 2 == 0) {
      p(`for: i :${i}`);
    }
  }
}

// Q2. 반복문 0~10 출력 하는데 8 을 만나면 끝나는것
{
  for (let i = 0; i < 11; i++) {
    if (i == 8) {
      break;
    } else {
      p(`for: i :${i}`);
    }
  }
}
