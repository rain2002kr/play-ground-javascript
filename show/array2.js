const log = (m) => console.log(m);
const clear = () => console.clear();
// Q1 어레이 => 문자열
// join 을 이용
{
  const fruits = ["apply", "banana", "orange"];
  const result = fruits.join(", and ");
  log(result);
}
// Q2 문자열 => 어레이
// split 을 이용
{
  const fruits = "apply,banana,orange";
  const result = fruits.split(",", 2); //구분자와 리미트값
  log(result);
}
// Q3 문자열 순서를 거꾸로 만들기
// reverse
{
  clear();
  const array = [1, 2, 3, 4, 5];
  const result = array.concat().reverse(); //배열 자체를 변환
  log(array);
  log(result);
}
// Q4 첫번째와 두번째 배열요소 없애서 새로운 배열 만들기
// slice 을 이용, 배열에서 원하는부분만 지정해서 리턴해서 받아온다.
{
  clear();
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, array.length); //받아오고 싶은 마지막수+1을 해서 받아옴.
  log(array);
  log(result);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
// find를 이용, 찾는 값을 바로 리턴
{
  clear();
  //predict 는 함수 형태로 넣어주면됨.
  const result = students.find((student, index) => {
    //log(student, index);
    return student.score === 90;
  });
  log(result);
}

// Q6. 수업등록한 학생만 골라서 배열로 만들어라.
// filter 를 이용
{
  clear();
  const result = students.filter(
    (student) => (student.enrolled === true) | (student.name === "D")
  );
  log(result);
}
// Q7. 점수만 뽑아와서 배열로 만들기
// 결과 [45,80,90,66,88]
// map 을 이용
{
  clear();
  const result = students.map((student) => student.score); //mapping 할때 의미있게 맵할수 있도록 쓰는게 중요 키포인트!
  log(result);
}

// Q8. 50점 보다 이하의 점수를 가지고있는 학생이있는지 확인
// some 을 이용, 하나라도 조건에 만족한다면 true
{
  clear();
  const result = students.some((student) => student.score < 50); //하나라도 조건이 만족! or 와 같음.
  log(result);
  const result2 = students.every((student) => student.score < 50); //every는 조건이 모두 만족! and와 같음
  log(result2);
  log(!result2);
}

// Q9. 학생들의 평균점수 구하기
// reduce 를 이용, 모든 배열을 돌면서 값을 누적할수 있음.
// reduce.Right 는 거꾸로 도는 놈.
{
  clear();
  /* const result = students.reduce((prev, curr) => {
    log("--------s");
    log("--------p");
    log(prev);
    log("--------c");
    log(curr);
    return prev + curr.score;
  }, 0); //,0 초기값 전달. */
  const result = students.reduce((prev, curr) => prev + curr.score, 0); //,0 초기값 전달. */
  log(result / students.length);
}

// Q10. 점수를 모두 string 으로 바꾸기
// map 과 join 이용
{
  clear();
  const result = students
    .map((student) => student.score)
    .filter((score) => score > 70)
    .join();
  log(result);
  const res = result.split(",");
  log(res);
}
// Q11. 점수를 낮은 점수로 정렬하기
// map 과 join 이용
{
  clear();
  const result = students
    .map((student) => student.score)
    .sort((a, b) => b - a) //a-b , b-a 로 순서 바꾸기...
    .join();
  log(result);
}

// Q12. find a student with the score 90 and update
// find를 이용, 찾는 값을 바로 리턴
{
  class Food {
    constructor(id, name, count) {
      this.id = id;
      this.name = name;
      this.count = count;
    }
  }
  const foods = [
    { id: "a", name: "na", count: 0 },
    { id: "b", name: "nb", count: 0 },
    { id: "c", name: "nc", count: 0 },
    { id: "d", name: "nd", count: 0 },
    { id: "e", name: "ne", count: 0 },
  ];

  clear();
  //predict 는 함수 형태로 넣어주면됨.
  const f_id = "a";
  const result = foods.find((food, index) => {
    //log(student, index);
    return food.id === "a";
  });
  log(foods);
  log(result);
  result.count = 2;
  log(result);
  log(foods);
}
