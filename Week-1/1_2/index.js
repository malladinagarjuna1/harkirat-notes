
// Write a function that takes a user as an input and greets them with their name and age
// my attempt
// function greet(user1){
//     console.log("hello  your name is "+user1.name+"and your age is"+user1.age);

// }
// let user1 = {
//     name : "harkirat",
//     age:20,
//     gender:"male",
// }
// greet(user1);
// another way is ${name}
// so correct  answer is 
// function greet(user1){
//     console.log(`hello your name is ${user1.name} and your age is ${user1.age}`);
// }

// let user1 = {
//     name : "harkirat",
//     age:20,
//     gender:"male",
// }
// greet(user1);

// let user1 = {
//     name :
//     {
//         name: "nfs",
//         country:"india"
//     },
//     age:20,
//     gender:"male",
// }
// console.log(user1.name.country);
function greetUser(user){
    let prefix;
    if(user.gender.toLowercase==="male"){
        prefix="Mr.";
    }
    else if(user.gender.toLowercase==="female"){
        prefix= "Mrs";

    }
    else{
            prefix="Mx.";
    }
    console.log(`hi ${prefix}${user.name}, your age is ${user.age}`);
}

const newUser = {
  name: "Harkirat",
  age: 21,
  gender: "male"
};

greetUser(newUser);
// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down 
// to just the elements from the given array that pass the test implemented by the provided function.

const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
const wor =["spray","elite"];
const res = wor.filter((wor)=> wor.length>3);
console.log(res);

//examples
//Filtering out all small values
// function isBigEnough(value) {
//   return value >= 10;
// }

// const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// // filtered is [12, 130, 44]
// 
// Find all prime numbers in an array
// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]


// Filtering invalid entries from JSON
// const arr = [
//   { id: 15 },
//   { id: -1 },
//   { id: 0 },
//   { id: 3 },
//   { id: 12.2 },
//   {},
//   { id: null },
//   { id: NaN },
//   { id: "undefined" },
// ];

// let invalidEntries = 0;

// function filterByID(item) {
//   if (Number.isFinite(item.id) && item.id !== 0) {
//     return true;
//   }
//   invalidEntries++;
//   return false;
// }

// const arrByID = arr.filter(filterByID);

// console.log("Filtered Array\n", arrByID);
// // Filtered Array
// // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

// console.log("Number of Invalid Entries =", invalidEntries);
// // Number of Invalid Entries = 5

//Searching in array
// const fruits = ["apple", "banana", "grapes", "mango", "orange"];

// /**
//  * Filter array items based on search criteria (query)
//  */
// function filterItems(arr, query) {
//   return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
// }

// console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
// console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

//Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male    




