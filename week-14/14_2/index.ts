function sums ( int a , int b){
    return a+b;
}

function sum(a: number, b:number):number {
return a+b;
}

sum("asda", "asdas");

function greet(name: String):String{
    return "Hello"
}

let user ={
    name:"harkirat",
    age:21,
    address:{
        city: "chandigarh",
        country: "India",
        pincode: 123456

    }
}

interface User{
    name: String;
    age: number;
    address:{
        city: String;
        country: String;
        pincode: number;

    };


}
abstract class User{
    name: String;
    constructor(name: String){
        this.name= name;
    }
    abstract  greet:()=> String;
    hello(){
        console.log("hi there");
    }
}

class Employee implements User {
    name: String;
    constructor(name: String){
            this.name = name
    }
    greet(){
        return "hi" +this.name;
    }
}

interface User2{
    name: String,
}

type User3={
 name: String, 
 age: number
}

type User = {
    name: String;
    age: number;

}

type Employee={
    name: String, 
    startDate: Date;
};

type Manager={
    name: String, 
    department : String
}

type TeamLead= Employee & Manager;

let e: Employee={
    name:"harkirat",
    startDate: "01-02-2025"
};

let m: Manager={
    name: "Harkirat",
    department: "Electricity"
};

let t: TeamLead={
    name: "Harkirat",
    startDate:"03-09-2045"
};

type GoodUser={
    name: String, 
    gift: String
}  

type BadUser ={
    name: String, 
    lp: String
};

type  User =GoodUser|BadUser

const user: User ={
    name: "harkirat",
    ip:"asdfg",
    gift:"dfdgfh",
}

console.log(user);

interface Admin{
    name: String;
    permissions: String
}

interface User {
    name: String;
    age: number
}
type UserOrAdmin= User |Admin

function greet(user: User|Admin){
 console.log(user.name2)
}

interface User{
    age: number |String
}

function getMax(nums: number){
    let maxValue = -100000000;
    getMax([1,2,3]);
    for (let i=0; i<nums.length, i++){
        maxValue= nums[i];
    }
    return maxValue;
}

interface User {
    name : String;
    age: number;
    addresses: Address[];
}

// let user: User ={
//     name: "harkirat";
//    age: "fsghfe";
// }


interface User{
    firstName : String;
    lastName: String;
    age: number;
}

function filtersUsers(users: User[]){
    let ans=[];
    for( let i=0; i<users.length; i++){
        if(users[i].age> 18){
            ans.push(users[i]);
        }
    }
    return ans;
}

const filteredUsers = filtersUsers([{
    firstName: "harkirat";
    lastName: "singh";
    age: 21
}])


