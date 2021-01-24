"use strict";
const log = (m) => console.log(m);
const clr = () => console.clear();
// 프로미스는 비동기를 간단하게 처리할수 있도록 도와주는 오브젝트 입니다.
// 두가지 중요한 사항
// 상태 state : pending -> fulfilled or rejected
// 프로듀서와 컨슈머를 알아야 한다. : 제공하는 프로듀서, 소비하는 컨슈머
// Producer vs Consumer

// 1. Producer
// 프로미스를 만드는 순간, executer 는 바로 실행 된다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  log("doing something");
  setTimeout(() => {
    resolve("ellie"); //then 에 처리
    reject(new Error("no network")); //then 에 처리
  }, 2000);
});

// 2. Consumers : then, catch, finally
promise
  .then((value) => {
    log(value);
  })
  .catch((error) => {
    log(error);
  })
  .finally(() => {
    //무조건 실행된다.
    log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});
fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("🐔");
    }, 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve(`${hen}=>🥚`);
      reject(new Error("egg is broken"));
    }, 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${egg}=>🍳`);
    }, 1000);
  });

getHen() //
  .then(getEgg) //받아오는인자가 1개이고, 넣어주는인자도 1개라면 생략이 가능하다.
  .catch((error) => {
    //중간에 발생하는 에러를 처리하고싶을때는 이와같이~!
    return "🍇";
  })
  .then(cook)
  .then(log)
  .catch(log);
/* .then((hen) => getEgg(hen))
  .then((egg) => cook(egg))
  .then((meal) => log(meal)); */

/* log("🍇", "🍜");
log("🐔🥚🥘🍳");
 */
