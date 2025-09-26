let array = [1, 2, 3, 4, 5];


//map --> it have two parameter one for value and another for index of element and it is return new array
array.map((value, index) => {
  console.log(`element ${value} is on index ${index}`);
});

//filter --> it is also higher order function and it is using for filtering and give expected value based on condition
let evenArray = array.filter((value) => value%2==0)
console.log(evenArray)

//reduce --> it is used for perform operation acrros whole array like sum of all element in array etc.. and it ahs two parameter one for value and one for current state not return new array
const sum = array.reduce((sum,valueCurrent) => sum+valueCurrent,0)
console.log(sum)