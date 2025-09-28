import mul from "./mymodule.js";

//clouser is nothing but block of child with its parent lexical environment
function x() {
  let count = 6;
  console.log("i am x");
  function y() {
    console.log(++count);
  }
  y();
}
x();

//we can use clouser for private our variable, also use for perform currying, callback etc...

//hoisting -> in hoisting we are not use variable before initializing but in js we are do that thing with only function and var 

console.log(number) //undefine 

var number = 10

console.log(number) //print 10

sayHello() //we are also dothat thing with unction it is not throw an error

function sayHello(){
    console.log("hello i am umang dhandhukiya")
}

//but we are not playing with function expression or let and const like this

func() //throw an error

let func = () => {
    console.log("hello world");
    //function scope
}

console.log(myLet,myConst); //give refrence error not use before initialixing 
// this duration is known as temporal deadzon 
let myLet = 10
const myConst = 10

{
    var a = 10
    var b =10
    var c = a+b
}//block scope

//this keyword in js
const user = {
  name: "Umang",
  greet: function() {
    console.log("Hello,", this.name); // 'this' refers to 'user'
  }
};
user.greet();

console.log(mul(10,2)) // using mul function from module

// spread operator ...

let arr1 = [1,2,3]
let arr2 = [4,5,6]
let combine = [...arr1,...arr2] //spreading 
console.log(combine);

//rest operator ...

function resting(num1,...numbers){
  console.log(num1);
  console.log(numbers);  
}
resting(10,20,30,40,50,60) //resting

//destructuring 

let obj1 = {
  name:"umang",
  study:"mca",
  mono:"9265081552",
  city:"rajkot"
}

let {name,study,mono,city} = obj1 //destructure
console.log(`my name is ${name} i am pursuing ${study} and i am from ${city}`)
