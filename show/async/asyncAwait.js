"use strict";
const log = (m) => console.log(m);
const clr = () => console.clear();
// async and await !!!! 최고 !!!
// 프로미스 위에 간편하게 syntactic sugar 라로 부른다.
// 프로미스와 async 와 차이점을 보고 병합해서 사용하는게 좋다.

// 1. async
async function fetchUser() {
  // do network request in 10 secs...
  return "khlee";
}

const user = fetchUser();
user.then(log);

// 2. await
function delay(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  //throw "error";
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

async function pickFruits() {
  try {
    const applePromise = getApple(); //executor 를 이용해서 바로 처리
    const bananaPromise = getBanana(); //병렬처리 해주는 방법
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple}+${banana}`;
  } catch (err) {
    log(err);
  }
}

pickFruits().then(log);

// 3. useful promise APIs.
// 2번 방식이 아니라, 한방에 다 모여주는 Promise.all([함수...])

function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}

pickAllFruits().then(log);

// 먼저 따지는 놈을 먼저 받아오고 싶다.
// race 시켜서 먼저 오는 놈을 받아오는놈!!!!!
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(log);
