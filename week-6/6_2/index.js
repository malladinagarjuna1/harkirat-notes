const express = require('express');
const JWT = require('jsonwebtoken');
const JWT_SECRET = "harkirat123";
const app = express();
app.use(express.json());
const users=[];

app.post("/signup",function(req,res){
   const username = req.body.username;
   const password = req.body.password;

   users.push({
    username: username,
    password: password
   })
res.json({
    messages:"you are signed in"
})

   
})

app.post("/signin", function(req, res){
const username= req.body.username;
const password= req.body.password;

    let foundUser = null;
    for( let i=0; i<users.length; i++) {
        if(users[i].username=== username  && users[i].password=== password){
            foundUser = users[i];
        }

    }
    if(!foundUser){
        res.json({
            message:"credentials incorrect"
        })
        return  
    }else{
        const token = JWT.sign({
            username
        }, JWT_SECRET);
        res.json({
            token:token
        })
    }
})

app.get("/me",logger, auth,  function(req, res){
 const token=   req.headers.token;
 const decodedData = JWT.decode(token);

 if(decodedData.username)
{
    let foundUser = null;
    for( let i=0; i<users.length;i++){
        if( users[i].username=== username  &&  users[i].password === password){
            foundUser = users[i];
        }
    }
    res.json({
        username:foundUser.username,
        password: foundUser.password
    })
}

function auth(req, res, next){
    const token = req.headers.token;
    const decoded = JWT.verify(token, JWT_SECRET);
    if(decodedData.username){
        next()

    }
    else{
            res.json({
                message: "you are logged in"
            })
    }
}

});
function logger(req, res, next){
    console.log(req.method+"request came");
    next();

}
app.listen(3000);