'use stric';
// 1. Array make way~!
{
  console.log('Array Start');
  const arr1 = ['🍎', '🍌'];
  const arr2 = new Array('🍎', '🍌');
  console.log(arr1);
  console.log(arr2);
}
// 2. Array push, pop : unshift, shift, splice
{
  console.clear();
  console.log('Array CRUD');
  const arr1 = ['🍎', '🍌'];

  //C push : put data a end of array 
  arr1.push('🍍');
  arr1.push('🍏');
  console.log(arr1);

  //D pop : delete data a end of array
  const poped1 = arr1.pop();
  console.log('poped1 : ' + poped1);
  const poped2 = arr1.pop();
  console.log('poped2 : ' + poped2);
  console.log(arr1);


  //C unshift : put data a front of array
  arr1.unshift('🍍');
  console.log(arr1);

  //D shift : delete data a front of array
  const shifted = arr1.shift();
  console.log('shifted : ' + shifted);
  console.log(arr1);

  //splice : 
  arr1.push('🍍');
  arr1.push('🍏');
  //del (start index, count)
  //del and push or replace (start index, count, data,...n)
  arr1.splice(1, 0, '🍎', '🍌');
  console.log(arr1);

}

//3. Array function 
{
  console.clear();
  console.log('START ETC toString')
  //toString
  let array = [1, 2, 3, 4];
  console.log(array.toString());

  //concat 배열의 합, 데이터 같아도 무조건 합치기
  const array1 = ['a', 'b', 'c'];
  const array2 = ['a', 'd', 'e', 'f'];
  const array3 = array1.concat(array2);
  console.log(array3);

  //중복제거 세가지 방법
  //1. set
  const delcom = [...new Set(array3)];
  console.log(delcom);

  //2. filter 
  // return value add and make array
  // array3.filter((item, index) => array3.indexOf(item) === index)

  //3. reduce

  //join 배열에 값들을 합치는 함수
  const elements = ['Fire', 'Air', 'Water'];

  console.log(elements.join());
  // expected output: "Fire,Air,Water"

  console.log(elements.join(''));
  // expected output: "FireAirWater"

  console.log(elements.join('-'));
  // expected output: "Fire-Air-Water"


  //slice (시작 to 마지막) : 마지막은 포함이 안됨. 마지막 그전 index 값까지...날려버림
  const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

  console.log(animals.slice(2));
  // expected output: Array ["camel", "duck", "elephant"]
  
  console.log(animals.slice(2, 4));
  // expected output: Array ["camel", "duck"]
  
  console.log(animals.slice(1, 5));
  // expected output: Array ["bison", "camel", "duck", "elephant"]


  //sort 영문자순서, 숫자 순서로 정렬
  const months = ['March', 'Jan', 'Feb', 'Dec'];
  months.sort();
  console.log(months);
  // expected output: Array ["Dec", "Feb", "Jan", "March"]

  const arr = [1, 30, 4, 21, 100000];
  arr.sort();
  console.log(arr);
  // expected output: Array [1, 100000, 21, 30, 4]

  //reverse 역 정렬 
  months.reverse();
  console.log(months);


  //indexOf 값의 중복값이 있을때 앞의 index 값 리턴
  console.log(months.indexOf('Dec'));

  //lastIndexOF 중복값이 있을때 뒤에 값 리턴
  console.log(months.lastIndexOf('Dec'));

  //forEach callback(value, index, array[])
  const arrs = ['a', 'b', 'c'];
  arrs.forEach((element, value) => console.log(element + " : " + value));


  //filter
  // return value add and make array
  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
  const result = words.filter(word => word.length > 6);
  console.log(result);
  // expected output: Array ["exuberant", "destruction", "present"]


  //map array 에 mapping 할때 
  const arrmap = [1, 4, 9, 16];

  // pass a function to map (리턴 배열)
  const map1 = arrmap.map((value, index) => {
    return {
      index,
      value: value * 3
    }
  });
  console.log(map1);
  // expected output: Array [2, 8, 18, 32]

  //reduce

  //every 
  const isBelowThreshold = (currentValue) => currentValue < 40;

  const arra = [1, 30, 39, 29, 10, 13];

  console.log(arra.every(isBelowThreshold));
  // expected output: true

  //some
  const arrays = [1, 2, 3, 4, 5];

  // checks whether an element is even
  const even = (element) => element % 2 === 0;

  console.log(arrays.some(even));
  // expected output: true

  //reduceRight

  //flat 중첩배열 제거
  const arr1 = [0, 1, 2, [3, 4]];

  console.log(arr1.flat());
  // expected output: [0, 1, 2, 3, 4]

  const arr2 = [0, 1, 2, [
    [
      [3, 4]
    ]
  ]];

  console.log(arr2.flat(2));
  // expected output: [0, 1, 2, [3, 4]]

}


// JSON to Stringfy and parse
{
 console.clear();
 // Using slice, create newCar from myCar.
let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }
let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997']
let newCar = myCar.slice(0, 2)

// Display the values of myCar, newCar, and the color of myHonda
//  referenced from both arrays.
console.log('myCar = ' + myCar);
let json = JSON.stringify(myCar)

console.log('myCar Json stringify = ' + json);
let obj = JSON.parse(json);
console.log('myCar Json parse = ' + obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));
let vals = Object.values(obj)
for(let k of vals){
  console.log(k);
}
console.log(Object.entries(obj));

// console.log('newCar = ' + JSON.stringify(newCar))
// console.log('myCar[0].color = ' + myCar[0].color)
// console.log('newCar[0].color = ' + newCar[0].color)

// Change the color of myHonda.
// myHonda.color = 'purple'
// console.log('The new color of my Honda is ' + myHonda.color)

// Display the color of myHonda referenced from both arrays.
// console.log('myCar[0].color = ' + myCar[0].color)
// console.log('newCar[0].color = ' + newCar[0].color)
}


// 🍍
