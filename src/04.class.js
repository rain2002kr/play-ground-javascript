'use stric';
{
  class Info {
    constructor(name, age){
      this.name = name;
      this.age = age;
    }
    // methode
    introduce(){
      this.speakName();
      this.speakAge();
    }
    speakName(){
      console.log(`my name is ${this.name}`);
    }
    speakAge(){
      console.log(`my age is ${this.age}`);
    }
    get age(){
      return this._age;
    }
    set age(value){
      this._age = value < 0 ? 0 :value;
    }
    
  }

  const khlee = new Info('khlee',55);

  khlee.introduce();
  khlee.age=44;
  khlee.introduce();
  khlee.age=-4;
  khlee.introduce();
}

// PRIVATE IN CLSSS
{
  console.log('START PRIVATE IN CLASS');
  class Private {
    publicField = 3;
    #privateField = 5;
    say(){
      console.log(`private value ${this.#privateField}`)
    }
  }
  const pri = new Private();
  console.log(pri.publicField)
  console.log(pri.privateField)
  pri.say();
  pri.privateField = 6;
  pri.say();
}

// STATIC IN CLASS
{
  console.log('STATIC IN CLASS');
  class Static {
    static publisher = 'hoons family'
    static saysome(){
      console.log('STATIC FC');
    }

  }

  const test = new Static();
  console.log(test.publisher);
  console.log(Static.publisher); //이와 같이 접근...
  console.log(test.saysome);
  test.saysome;
  Static.saysome(); //함수도 마찬가지...
}

// 상속 EXTEND 
{
  console.log('START EXTEND CLASS')
  class Shape{
    constructor(width, height, color){
      this.width = width;
      this.height = height;
      this.color = color;
    }
    draw(){
      console.log(`drawing : ${this.color} color of`);
    }
    getArea(){
      return this.width * this.height;
    }
  }
  //OVERRIDING 
  class Rentangle extends Shape{
    draw(){
      super.draw();
      console.log('RENTANGEL')
    }
    draw(show){
      console.log(show);
    }
  }
  const retengle = new Rentangle(4,3,'red');
  console.log(retengle.getArea());
  retengle.draw();
  retengle.draw('overload');

}

//CLASS INSTANCEOF 명령어
{
  console.log('INSTANCEOF CLASS')
  class Class{
    constructor(name){
      this.name = name;
    }
    get name(){
      return this._name;
    }
    set name(value){
      this._name = value;
    }
  }
  const inst1 = new Class('khlee');
  console.log(inst1 instanceof Class);
  console.log(inst1 instanceof Object);
}

