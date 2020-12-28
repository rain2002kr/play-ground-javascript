// whole-script strict mode syntax
// 자바는 굉장히 플렉시블하다.
// 플렉시블 === 위험하다.
// ECMAScript 5 에 추가 되었습니다.
"use strict"; //이것을 선언해주면 에러를 만들수 있음.

// 2. Variable
// let (added in ES6)
let globalName = "globalName";
{
  let name = "ddd";
  console.log(name);
  name = "444";
  console.log(name);
  console.log(globalName);
}

// 2. var (don't ever use this!)
// var hoisting (어디에 선언되든 맨위로 끌어올려준다.)
// 또하나 {} var 는 블럭 스코프가 없다.
// 선언하지도 않은 값들이 딸려오기 때문에 쓰지 말라!
// 최신 기능을 사용 할때는 인터넷익스플로로는 ES6를 지원안한다.
// 정말 지원해야 한다면 바벰을 이용해서 컨버팅 한다.
age = 4;
var age;
console.log(age);

// 3. const 한번 선언후 값을 변경할수 없다.
// 보안 강화, 쓰레드 안전, 휴먼미스테이크
// immutable data type
// - security
// - thread safety
// - reduce human mistakes

// 4. variable types
// primitive, single item : number, string, boolean , null, undefined , symbol
// object : box container
// function , first-class function 펑션도 데이터 타입으로 가능하므로 인자로 전달 가능.
// 오류 상황 무한대 나오는 경우와 not a number 나오는 경우
const infinity = 1 / 0;
console.log(infinity);

const negativeInfinity = -1 / 0;
console.log(negativeInfinity);

const nAn = "not a number" / 2;
console.log(nAn);

// bigInt
const bigInt = 123456789010101010101010n;
console.log(bigInt);

// string 백틱을 이용해서 사용
const char = "hello";
const bob = `hi ${char}`;
console.log(bob);

// boolean
// false : 0 , null, undefined, NaN, ''
// true

// null
let nothing = null;
console.log(nothing);
// undefined
let x;
console.log(x);

// symbole, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2);
console.log(`value : ${symbol1.description}, type: ${typeof gSymbol1}`); //심볼 이용할때는 다음과 같이 사용

// 5. 다이나믹 타입핑 언어 : 타입이 다이나믹하게 런타임에서 선언된다.
let text = "hello";
console.log(text.charAt(0)); //h
console.log(`text : ${text}, type: ${typeof text}`); //심볼 이용할때는 다음과 같이 사용
text = 1;
console.log(`text : ${text}, type: ${typeof text}`); //심볼 이용할때는 다음과 같이 사용
text = "7" + 5;
console.log(`text : ${text}, type: ${typeof text}`); //심볼 이용할때는 다음과 같이 사용
text = "8" / "2";
console.log(`text : ${text}, type: ${typeof text}`); //심볼 이용할때는 다음과 같이 사용


// object 는 값이 아니라 레퍼런스의 주소값이 저장 된다. 
// 노트 
// immutable data types : premitive types, frozen objects
// Mutable data types : all objects by default are mutable in JS 
