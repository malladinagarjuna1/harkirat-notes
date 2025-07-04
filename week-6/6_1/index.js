const express = require('express');
const JWT_SECRET ="KVKDFNBSDG";
const JWT= require('jsonwebtoken');


const app =express();
app.use(express.json());
const users=[];
function generateToken(){
    return Math.random();
}
app.post("/signup", function(req,res){
const username= req.body.username;
const password= req.body.password;

users.push({
    username: username,
    password: password
})
res.json({
    messages: "you are signed in"
})

})

app.post("/signin", function (req, res){
const username =  req.body.username;
const password= req.body.password;
let foundUser = null;
for ( let i=0;i<users.length; i++){
   if(users[i].username== username && users[i].password== password){
    foundUser=users[i];   }
}

if(foundUser){
// const token = generateToken();
const token = jwt.sign({
    username:username
}, JWT_SECRET);

foundUser.token= token; 
res.json({
    token: token

})}
else{
    res.status(403).send({
        message:"Invalid  username or password",
    })
}
console.log(users)
});

app.get("/me", fucntion(req, res){
    const token = req.headers.token
    const decodedInformation = jwt.verify(token, JWT_SECRET);
    const username = decodedInformation.username;
    let foundUser= null;
    for( let i=0; i<users.length; i++){
        if(users[i].token== token){
            foundUser = users[i];

        }
    }
    if(foundUser){
        res.json({
            username:foundUser.username,
            password:foundUser.password
        })
    }
    else{
            res.json({
                message:"token invalid"
            })
    }
});

app.listen(3000);
