"use strict";
const log = (m) => console.log(m);
const clr = () => console.clear();
//CallBack Hell example
// Promise
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "khlee" && password === "1") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 1000);
    });
  }

  // getRoles(user) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (id === "khlee") {
  //         resolve({ name: "khlee", role: "admin" });
  //       } else {
  //         reject(new Error("no access"));
  //       }
  //     }, 1000);
  //   });
  // }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage
  .loginUser(id, password)
  .then((user) => {
    alert(`Hello ${user} `);
    // alert(`Hello ${user.name}, you have a ${user.role} role`);
  })
  .catch(log);
