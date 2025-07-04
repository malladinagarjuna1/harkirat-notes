interface User{
    id: String;
    name: String;
    age: number;
    email: String;
    password: String
};
const 
function sumOfAge(user1: User, user2: User){
    return user1.age+ user2.age;
}

const age = sumOfAge({name : 'Taro', age: 20}, {name: '3iro', age:30});
console.log(age);
interface UpdateProps{
    id: String;
    name: String;
    age: String;
    password: String
};
type UpdateProps = Pick <User, 'name'|'age'|'email'>


function updateUser(name: String, age: number, )

type User = {
    readonly name: String;
    readonly age: String;
}

const user : User ={
    name: "John",
    age: 21
}


const users = new Map<String, User>()
    user.set("ras@qd1",{name: "ras", age:"30", email:"rasqd1"})
    user.set("sarah@q1",{name:"sarah", age:"23",email:"jfd"})

    const user =users.get("ras@qd1");
    console.log(user);
