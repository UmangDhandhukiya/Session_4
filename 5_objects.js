let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

delete user.name

for (let key in user) {
 console.log(key) //print key of user object
 console.log(user[key]) //print value for each key 
}

//method for object
let obj1 = {a:1}
let obj2 = {b:2}

let arr = [["name","umang"]]

console.log(Object.keys(user)) // for keys

console.log(Object.values(user)) // for value

console.log(Object.entries(user)) // for both key and values

console.log(Object.fromEntries(arr)) // we can use froEntries to conver arr to object

Object.freeze(obj1) // now obj1 is immuable we cant modified it 

Object.seal(obj2) // it is same like freeze but we can update value in seal 

Object.preventExtensions(obj1) //in this we can perform only delete method with this

console.log(Object.assign(user,obj2)) //merge both objects
