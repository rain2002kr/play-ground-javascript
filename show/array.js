"use-strict";
const log = (message) => console.log(message);
const clear = () => console.clear();
// 자료 구조
log("자료구조 vs object ");
log(
  "토끼와 당근처럼, 이러한 물체를 묶어놓는것을 오브젝트들을 묶어놓는것을 자료 구조라 한다."
);
log(
  "타입이 달라도 담을수 있다. 자바스크립트에서 가능하지만 이런식의 프로그램은 좋지 않다."
);
log("자료구조! 알고리즘! 공부하기.");
log("삽입, 삭제, 검색, 정렬 할때 효율성을 같이 공부 해야 한다.");
clear();
log("배열 시작~!");
// 1. 선언
const array1 = [1, 2];
const array2 = new Array();

log(array1);
log(array1[0]);
log(array1[1]);
log(array1.length - 1); //last index 가져오기

// 2. Loop over an array
// value 값
for (i of array1) {
  log(`loop : ${i}`);
}
//key 값
for (i in array1) {
  log(`loop : ${i}`);
}
//forEach 를 이용
// 첫번째는 하나씩, 두번째는 index, 세번째는 전체
array1.forEach((arr, index, array) => {
  log(`arr : ${arr}`);
  log(`index : ${index}`);
  log(`array : ${array}`);
});

// 3. 배열의 추가, 삭제, 복사
// 속도를 위해서 push 와 pop 을 이용해야 합니다.
// push : add an item to the end
array1.push(3);
array1.push(4);
log(`push : ${array1}`);

// pop : remove an item from the end
array1.pop();
log(`pop : ${array1}`);

// unshift 와 shift 는 push와 pop 보다 훨씬 느리다.
// unshift : add an item to the first
array1.unshift(4);
log(`unshift : ${array1}`);

// shift : remove an item from the first
array1.shift();
log(`shift : ${array1}`);

// 지정된 position 에서 삭제 하는 명령어
// splice : remove an item by index position
clear();
array1.push(5);
log(`push : ${array1}`);
array1.splice(0, 1); //갯수를 지정안하면 그뒤로 다지운다.
log(`splice : ${array1}`);
array1.splice(0, 1, 4, 5, 6); //스타트, 갯수, 뒤로 값을 넣으면 그뒤로 채운다.
log(`splice : ${array1}`);

// 두개의 배열 합치기
// concat
const newA = [10, 12];
const newArr = array1.concat(newA);
//array1.push(newA);
log(`array1 : ${array1}`);
log(`newArr : ${newArr}`);

// 5. 검색 searching
// indexOf : find the index // 찾은 처음 값을 리턴
// includes
clear();
log(`indexOf : ${array1.indexOf(5)}`);
log(`includes : ${array1.includes(5)}`);

// lastIndexOf , 찾은 맨마지막값을 리턴
clear();
log(`lastIndexOf : ${array1.lastIndexOf(5)}`);

// toString
{
  const arr = [1, 2, 3];
  const strArr = ["a", "b", "c"];
  /* log(arr.toString()); */
  /* const ar2 = arr.pop();
  log(ar2); */
  log(arr.reverse());
  log(arr.sort());
  log(strArr.reverse());
  log(strArr.sort());
  /* arr.every((a) => log(a));
  arr.some((a) => log(a));
  log(arr.filter(2)); */
}
