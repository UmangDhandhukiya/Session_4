let array = [1,2,3,4,5]
let array2 = new Array(5,6,7,8,9)
let array3 = [1,2,[3,4,[5,6],[7,[8,9]]]]

console.log(array2);

array.push(6)
// console.log(array) 

array.pop()
// console.log(array) 

array.shift()
// console.log(array) 

array.unshift(1)
// console.log(array)

array.fill(1,1,array.length) //value start end
// console.log(array)

array2.copyWithin(2,0,2) // target start end
// console.log(array2)

//remove inner array and flat the main array
// console.log(array3.flat(4))

let findValue = array2.find(value => value%2==0)
console.log(findValue)

// console.log(array.includes(1))
// console.log(array.some(n => n>2))
// console.log(array.every(n => n===1))

const name = "umang"
console.log(name.split("")) // it is used toconvert string in array

console.log(array.join("")) // it is used for convert arr to string 

console.log(array.concat(array2)) //merge two array

array2.splice(2,3,7,8,10) //start removeCount new value 
console.log(array2)

console.log(array2.slice(1,3)) // start and end excluded 