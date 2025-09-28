//call back function -> means function which is pass as arguments in another function

setTimeout(function () {
  console.log("hello i am call back function of setTimeOut");
}, 5000);

// callback hell & inversion of controlls both issues with callback

// api.createOrder(orderId, function () {
//   api.makePayment(function () {
//     api.orderSummary(function () {
//         api.updateWallet()
//     });
//   });
// });

Promise;

// const promise = fetch("https://github.com/users/UmangDhandhukiya");
// console.log(promise);

// create promise

const pr = new Promise((resolve, reject) => {
  if (1 > 0) {
    resolve("successfull resolve");
  } else {
    reject("not resolve");
  }
});

console.log(pr);

//promise Api

const p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    // resolve("p1 pass");
    reject("fail p1");
  }, 4000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("p2 pass");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("p3 pass");
  }, 5000);
});

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log("all", res);
  })
  .catch((err) => {
    console.error("An error occurred:", err);
  });

Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log("all setteled", res);
  })
  .catch((err) => {
    console.error("An error occurred:", err);
  });

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log("race", res);
  })
  .catch((err) => {
    console.error("An error occurred:", err);
  });

Promise.any([p1, p2, p3]) // in any if ll are rejected then give aggregate error in form of array all rejected promise
  .then((res) => {
    console.log("any", res);
  })
  .catch((err) => {
    console.error("An error occurred:", err);
  });

const sum = () => {
  setTimeout(() => {
    setTimeout(() => {
      console.log("after 2 sec");
    }, 2000);
    console.log(10 + 5);
  }, 6000);
  console.log("random");
};
sum();

//Asyc Await -> async function always return promise

async function getData() {
  const val = await p3; //here javascript engine wait for p3 resolving
  console.log(val);
  console.log("hello world");

  const val1 = await p2; //here javascript engine wait for p2 resolving which time is less then above one then still wait for that
  console.log(val1);
  console.log("hello world 2");

}

getData()
