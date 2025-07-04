function greet(user:{
    name: String,
    age: number
}){
    console.log("hello"+ user.name);
}

greet({
    name: "harkirat",
    age: 21
})

let user = {
    name: "harkirat",
    age: 21,

}
greet(user);

