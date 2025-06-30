//Prmoises in js
const promise1 = new Promise(function (resolve, reject) {
  //Do an async task
  // Db calls, cryptography, network

  setTimeout(function () {
    console.log("Task is complete");
    resolve();
  }, 1000);
});

promise1.then(function () {
  console.log("Promise consumed");
});

//Method number 2

new Promise(function (resoleve, reject) {
  setTimeout(function () {
    console.log("Async task 2 is completed");
    resoleve();
  }, 2000);
}).then(function () {
  console.log("Promise 2 is resolved");
});

//Third promise (Then and resolve has connections)
const promise3 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve({
      userName: "Sayan Pramanik",
      email: "ramaniksayan406@gmail.com",
    });
  }, 3000);
});
promise3.then(function (user) {
  console.log(user);
});

//Method 4

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (error === false) {
      resolve({ name: "Sayan Pramanik", email: "GFGFG@gmail.com" });
    } else {
      reject("Error: Something happened");
    }
  }, 4000);
});

promise4
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally,The promise is either resolved or rejected");
  });

//Promise 5
const promise_five = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (error === false) {
      resolve({ userName: "Sayan", Gender: "Male" });
    } else {
      reject("Oh no error occurred");
    }
  }, 5000);
});

async function Promise_five_consumer() {
  try {
    const response = await promise_five;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

//calling the function
Promise_five_consumer();

//Async await function
// async function getAllusers() {
//   try {
//     const response = await fetch(`https://dummyjson.com/carts`);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllusers();

// one more way to fetch json

fetch(`https://dummyjson.com/carts`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
