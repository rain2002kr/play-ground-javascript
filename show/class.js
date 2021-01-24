// class
// - template
// - declare once
// - no data in
// object
// - instance of a class
// - created many times
// - data in

"use strict";
const log = (message) => console.log(message);
// object-oriendted programming
// class : template
// object : instance of a class
// JavaScript classes
// - introduced in ES6  // 새롭게 추가된 클래스임
// - syntactiacl sugar over 'prototype-based' inheritance  프로토 타입 위에 추가 된 클래스

// 1. Class declarations
class Person {
  //constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }
  // metods
  speak() {
    log(`이름은 ${this.name}이고, 나이는 ${this.age} 입니다.`);
  }
}

const khlee = new Person("khlee", 38);
khlee.speak();

// 2. Getter and setters.
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("steve", "job", -1);
log(user1.age);

// 3. Static propertyes and methods
// Too Soon!
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  static printPublisher() {
    log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    log(`drawing ${this.color} color of `);
  }
  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    log(`ㅅ`);
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
  toString() {
    return `this is Trangle ${color}`;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
log(triangle.draw());
log(triangle.getArea());

// 6. Class checking : instanceOf
log(rectangle instanceof Rectangle);
log(triangle instanceof Rectangle);
log(triangle instanceof Triangle);
log(triangle instanceof Shape);
log(triangle instanceof Object);

log(triangle.toString);
