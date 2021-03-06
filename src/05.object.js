'use stric';
const clr = () => console.clear();
const log = (m) => console.log(m);
// 1. 오브젝트 만드는 방법 두가지 
{
  const obj = {
    name: "khlee"
  };
  const obj2 = new Object({
    name: "khlee",
    age: 39
  });
  console.log(obj);
  console.log(obj2);
  console.log(`obj + ${obj.name}`);
  console.log(obj.name);
  console.log(`obj2 + ${obj2.name}`);
  console.log(obj2.name);
}
// 2. 오브젝트 다이나믹 할당 및 삭제(추천안함)
{
  console.clear();
  const obj = {
    name: "khlee"
  };
  console.log(obj);
  obj.hasjob = "no job"
  console.log(obj.hasjob);
  delete obj.hasjob;
  console.log(obj.hasjob);

}
// 3. 오브젝트를 함수형 + 생성자형 함수형 
{
  console.clear();

  function makeObject(name, age) {
    return {
      name: name,
      age: age
    }
  }
  const khlee = makeObject("khee", 38);
  console.log(khlee)

  // 생략형, 같은 매개변수 일때 생략 
  function makeObj(name, age) {
    return {
      name,
      age
    };
  }
  const delobj = makeObj('cjs', 39);
  console.log(delobj);

  // 기능이 없다면 생성자형으로 만들기 
  // 유의 사항 new 키워드와 대문자 
  function MakeObj(name, age) {
    //{} 생략 
    this.name = name;
    this.age = age;
    //return 생략 
  }
  const conobj = new MakeObj("les", 13);
  console.log(conobj);

}

// 4. in 오퍼레이터로 키가 있는지 없는지 확인
{
  console.clear();
  const khlee = {
    name: "leekh"
  };
  console.log("name" in khlee);
  if ("name" in khlee) {
    console.log(khlee['name']);
  }
}

// 5. 오브젝트 순회 for in , 배열 순회 for of
{
  console.clear();
  const obj = {
    name: "leekh",
    age: 39
  };
  const array = ["leekh", 29, "male"];
  const mixed = [{
    name: "leekh",
    age: 39
  }, {
    name: "cjs",
    age: 38
  }];

  console.log("START : for IN [오브젝트]")
  for (key in obj) {
    console.log(`KEY ${key} :VALUE ${obj[key]}`);
  }
  for (key in array) {
    console.log(key);
  }

  console.log("START : for OF [배열]")
  for (key of array) {
    console.log(key);
  }
  //에러 발생 
  // for(key of obj){
  //   console.log(key);
  // }

  // 배열 [ {obj},obj ] 혼합형 출력
  console.log('START OF : Array MIXED');
  console.log(Object.keys(mixed));
  console.log(Object.values(mixed));
  console.log(Object.values(mixed['0']));
  console.log(Object.values(mixed[1]));
}

// 6. 클로닝 [1. 레퍼런스복사, 2. for 복사, 3 Object Assign 복사]
{
  console.clear();
  const obj = {
    name: "leekh",
    age: 39
  };
  const array = ["leekh", 29, "male"];

  console.log("레퍼런스 복사");
  const refCopy = obj;
  console.log(refCopy);

  //레퍼런스가 아닌 복제본 만들기 
  console.log("FOR 복사");
  const forCopy = {};
  for (key in obj) {
    forCopy[key] = obj[key];
  }
  console.log(forCopy);
  forCopy.name = "cjs";
  console.log(forCopy);
  console.log(obj);

  //오브젝트 Assign 
  //레퍼런스가 아닌 복제본 만들기 
  console.log("Object Assign 복사");
  const objCopy = Object.assign({}, obj);
  console.log(objCopy);
  objCopy.name = "les";
  console.log(objCopy);
  console.log(obj);

  //오브젝트 Assign 합쳐질때 같은 키값이면 뒤에것으로 덮어쓰고, 키값이 없으면 추가 됨, 키값 삭제는 delete
  const frunt1 = {
    color: "red"
  };
  const frunt2 = {
    color: "blue",
    size: "big"
  };
  const mixed = Object.assign({}, frunt1, frunt2);
  console.log(mixed);
  delete mixed.color;
  console.log(mixed);

  const array3 = {
    color: "blue",
    size: "big"
  };
  const array4 = {
    color: "orange",
    size: "small"
  };
  const sss = ['test', 'a', 123];

  const mixed3 = Object.assign([{}], array3, array4, sss);
  console.log(mixed3);
}


// 오브젝트 KEYS, VALUES, ENTRYS 
// Object.keys(obj) – 키가 담긴 배열을 반환합니다.
// Object.values(obj) – 값이 담긴 배열을 반환합니다.
// Object.entries(obj) – [key, value] 쌍이 담긴 배열을 반환합니다.
{
  console.clear();
  let user = {
    name: "John",
    age: 30
  };
  console.log(Object.keys(user));
  console.log(Object.values(user));
  console.log(Object.entries(user));
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  const map = Object.entries(salaries) //.map((key,value)=>{[key,value]});
  let sum = 0;
  for (let val of map) {
    console.log(val[1]);
    sum += val[1];
  }
  console.log(sum);

  for (let val in salaries) {
    console.log(salaries[val]);
  }

}

// 오브젝트 비구조화 할당 (오브젝트 분해하는것)
{
  //console.clear();
  clr();
  log('START 비구조화 할당')
  const obj = {
    name: "leekh",
    age: "39"
  };

  log(obj.name);
  log(obj.age);

  print(obj);

  function print({
    age
  }) {
    //const  = objs;
    //log(name);
    log(age);
  }
}

// 오브젝트 안에 함수 할당하기 
{
  clr();
  log('스타트 오브젝트 안에 함수')
  const Dog = {
    speak: '멍멍',
    //named function
    say: function named() {
      log(this.speak);
    },
    //unnamed function
    say: function () {
      log(this.speak);
    },
    //function 생략형
    say() {
      log(this.speak);
    },
    //화살표 함수는 사용하지 말길...
  }
  Dog.say();
}

// 오브젝트 안에 getter 와 setter 함수를 사용하자
{
  clr();
  log('START 오브젝트 안에 GET and SET 함수')
  const number = {
    a: 3,
    b: 5,
    calculate() {
      log('계산함수')
      return this.a + this.b;
    }
  }

  log(number);
  log(number.calculate())

  const numbers = {
    _a: 3,
    _b: 5,
    _sum: 0,
    calculate() {
      log('계산함수')
      return this._sum = this._a + this._b;
    },
    get sum() {
      return this._sum;
    },
    get a() {
      return this._a;
    },
    set a(a) {
      this._a = a;
      this.calculate();
    },
    get b() {
      return this._a;
    },
    set b(b) {
      this._b = b;
      this.calculate();
    }
  }

  log(numbers);
  log(numbers.a = 5);

  log(numbers.sum);
  numbers.b = 3;
  log(numbers.sum);
  log(numbers.sum);
  log(numbers.sum);
}

{
  clr();
  log("오브젝트 활용 1 ");

  function isAnimal(animal) {
    const animals = {
      개: () => log("멍멍"),
      고양이: () => log("야옹"),
      비둘기: ("구구구구"),
      거북이: function () {
        log("개 엉금엉금");
        log("엉금엉금")
      },
    }
    // 키값을 이용하여, falth 조건 판단.
    if (!animals[animal]) {
      log("없다")
      return false;
    }
    // 호출하기 ~! 키값으로 조회하고 뒤편에 반드시 ()함수형 호출 
    animals[animal]();

    //return animals[animal]() || log("없다")
  }
  isAnimal("개");


}