"use strict";
const log = (m) => console.log(m);
const clr = () => console.clear();

// JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting : var, function declaration

log("1");
setTimeout(function () {
  log("2");
}, 1000); //TimeHander is for callback

setTimeout(() => log("4"), 1400); //TimeHander
log("3");

// Synchronous callback
// JS에 의해 이 함수는 호이스팅 됩니다.
function printImmediately(print) {
  print();
}
printImmediately(() => log("hello"));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => log("async callback"), 1600);

//CallBack Hell example
//
//
{
clr();
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (id === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
 const id = prompt("enter your id");
 const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        log(error);
      }
    );
  },
  (error) => {
    log(error);
  }
);

