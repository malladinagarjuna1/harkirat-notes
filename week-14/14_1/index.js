"use strict";
// let x= 1;
// console.log(x);
let x = 1;
// x="harkirat"; showing the mistake as x has been defined early on as a number 
console.log(x);
function greet(firstname) {
    console.log('hello' + firstname);
}
//here any means it is assigning the different types of p
let p = 1;
p = true;
p = "harkirat";
p = 2;
function sum(a, b) {
    return a + b;
}
let ans = sum(1, 2); //don't need to say explicitly that answer is a number
console.log(ans);
function summ(c, d) {
    return c + d;
}
let anss = summ(3, 4);
console.log(anss);
