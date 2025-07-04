// let x= 1;
// console.log(x);
let x : number=1;
// x="harkirat"; showing the mistake as x has been defined early on as a number 
console.log(x);
function greet(firstname: String)
{
    console.log('hello'+firstname);

}
//here any means it is assigning the different types of p
let p:any =1;
p= true;
p="harkirat";
p=2;

function sum(a: number, b:number){
    return a+b;
}

let ans = sum(1, 2); //don't need to say explicitly that answer is a number
console.log(ans);

function summ(c: number, d:number){
    return c+d;
}

let anss = summ(3, 4);
console.log(anss);


function delayedCall(anotherFn: ()=> void){
    setTimeout(anotherFn, 1000);
}

function log(){
    console.log("hi there");
}
delayedCall(log);

function delayedCalls(anotherFn:(()=>number)|((a: number)=>number)){
    setTimeout(anotherFn, 1000);
}

function greet2( name:String){
    console.log("Hello"+ name);
}
delayedCall(greet2);


let greet = (name: String, x: number)=>{
    console.log("hi there"+name);
}

let firstname: String=  "harkirat",
let age: number = 21

let UserType= {
        firstname: String,
        lastname: String, 
         age: number
}

function greet(user: {
    firstname: string, 
    age: number,
    lastname: String
}){

}

type SumInput = String | number;

function sum(a: SumInput, b: SumInput){

}

interface Manager{
    name: String,
    age: number
}

interface Employee{
    name: String, 
    department: String
}

type  TeamLead = Manager  & Employee

let t: TeamLead={
    name: "harkirat", 
    age: 21,
    department: "Asdad"
}
