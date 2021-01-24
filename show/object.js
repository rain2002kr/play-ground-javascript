'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// ?Nearly all objects in JavaScript are instances of Object
// object = { key : value };

//  1. Literals and properties
const log = (message) => console.log(message);
function print(obj) {
  console.log(obj.name);
  console.log(obj.age);
}

const khlee = { name: "khlee", age: 39 };
print(khlee);

// 오브젝트를 만드는 두가지 방법
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

// 가능하지만,하지 않는게 좋다는 것!
khlee.hasJob = true;
log(khlee);

// 삭제도 가능
delete khlee.hasJob;
log(khlee);

// 2. Computed properties, 접근 법 두가지
log(khlee.name);
log(khlee["name"]); // 배열에서 받아오는것처럼 접근이 가능하다.stinrg type으로 지정해야함.
// computed properties 는 런타임에 결정될때 사용

function printValue(obj, key) {
  log(obj[key]);
}
printValue(khlee, "name");
printValue(khlee, "age");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = Person("elee", 30);

//인자와 리턴이 같다면, 생략이 가능하고 오브젝트를 만들수 있다.
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

// 5. in operator : key 가 있는지 없는지 체크 하는것
log("name" in khlee);

// 6. for..in vs for..of
// for (key in obj)

for (let key in khlee) {
  log(key);
}

// for ( value of iterable)
const array = [1, 2, 3, 4, 5];
for (let value of array) {
  log(value);
}

// 7. Fun cloning
// Object.assign( des, [obj1, obj2, obj3...])
const user = { name: "ellie", age: "20" };
const user2 = user;
log(user);
user2.name = "coder";
log(user);

// old way 수동으로 복사해서 쓰는방법
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}


log(user3);

// new way Object.assign 을 사용하는 방법
const user4 = {};
Object.assign(user4, user);
log(user4);

const userArray = [];
userArray.push(user);
userArray.push(user);
userArray.push(user);
const userArray2 = [];
userArray2.push(userArray);
userArray2.push(userArray);
userArray2.push(userArray);

const user5 = Object.assign({}, userArray2);
log(user5);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const count = { count: "3" };
let mixed = Object.assign({}, fruit1, fruit2, count);

log(mixed);
delete mixed.count;
log(mixed);

const addinfo = { price: 5000, set: 2 };
mixed = Object.assign({}, mixed, addinfo);
log(mixed);

delete mixed.price;
log(mixed);

const copy1 = Object.assign({}, mixed);
log(copy1);

/* mixed.addinfo = addinfo;
log(mixed);
 */
