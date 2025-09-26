//if else

let age = 1;

if (age >= 18) {
  console.log(`you are ${age} year old and elegible for votting`);
} else {
  console.log(`you are ${age} year old and not elegible for votting`);
}

//for loop (print table entered element)

let num = 5;

for (i = 1; i <= 10; i++) {
  // console.log(`${num} * ${i} = ${num*i}`)
}

//while loop
let j = 1;
let num1 = 4;
while (j <= 10) {
  // console.log(`${num1} * ${i} = ${num*i}`)
  j++;
}

//do while

let count = 1;
do {
  console.log(count);
  count++;
} while (count <= 5);

//for in

const person = { name: "umang", age: 21 };
for (let key in person) {
  console.log(key + ": " + person[key]);
}

//for of and forEach

 const colors = ["red", "green", "blue"]

 for(let color of colors){
    console.log(color)
 }

 colors.forEach(color => {
    console.log(color)
 });

 //switch

 switch (3) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "enter value from 0 to 7"; 
}

console.log(`today is ${dayName}`)

//function vs arrow function

function sum(a,b){ // normal function expression
    console.log(a+b)
}
sum(10,10)

const sub = function(a,b){ // function declaration
    console.log(a-b)
}

const squar = (num) => { // arrrow function
    return num*num
}
console.log(squar(5))

//major diffrence is between function and arrow function, function have access of this keyword and arrow function have not access of this keyword 