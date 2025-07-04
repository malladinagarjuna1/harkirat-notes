
const express = require("express");
const { UserModel } = require("./db");
const app = express();
const jwt = require('jsonwebtoken');
const JWT_SECRET= "DDVFHGDJGH";
app.use(express.json());
mongoose.connect("");



app.post("/signup", async function(req, res){
    const email = req.body.email;
    const password= req.body.password;
    const name =req.body.name;
    const p = UserModel.insert({
        email: email,
        password: password,
        name: name
    })
   const res = await UserModel.create({
        email: email,
        password: password,
        name: name
    })

    const user =UserModel.findOne({
        email: email,
        password: password
    })

    res.json({
        message: "You are logged in"
    })
    if(user){
        const token = jwt.sign({
         id: user._id
        },JWT_SECRET);
            res.json({
            token:token
            });
    }
    else{
        res.status(403).json({
            message: "incorrect credentials"
        })
    }


});


app.post("/signin", function(req, res){

});

function auth (req, res, next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token, jwt.verify);
    if(decodedData){
        req.userId= decodedData.userId;
    }

}