
// // // // // const express = require("express");
// // // // // const app = express();

// // // // // app.listen(3000);
// // // // const express = require('express');



// // // // const app = express();
// // // // app.get("/", function(req, res){
// // // //     res.send("hi there");
// // // // })
// // // // app.listen(3000);
// // // const app = express();
// // // function sum(n){
// // //     let ans =0;
// // //     for(let i=1;i<=n;i++){
// // //         ans = ans +i;
// // //     }
// // //     return ans;
// // // }
// // // app.get("/",function(req, res){
// // //     res.send("hi there");
// // // })
// // // app.listen(3000);

// // const express = require("express");
// // const app = express();
// // const users = [{
// //     name: "John",
// //     kidneys:[{

// //          healthy:false
// //     }]

// // }];
// // app.use(express.json());
// // app.get("/", function(req, res){
// //     const johnKidneys = users[0].kidneys;
// //     const numberofKidneys = johnKidneys.length;
// //     let numberofHealthyKidneys =0;
// //        for(let i=0; i<johnKidneys.length; i++){
// //             if(johnKidneys[i].healthy){
// //                 numberofHealthyKidneys= numberofHealthyKidneys +1;
// //             }
// //        } 
// //        const numberofUnHealthyKidneys= numberofKidneys- numberofHealthyKidneys;
// //        res.json({
// //         johnKidneys,
// //         numberofHealthyKidneys,
// //         numberofUnhealthyKidneys
// //        })
// //     console.log(johnKidneys)    
// // })
// // app.post("/", function(req, res){
// //     const n = req.query.n;
// //     console.log(req.body);
// //     const isHealthy = req.body.isHealthy;
// //     users[0].kidney.push({
// //         healthy: isHealthy
// //     }) 
// //     res.json({
// //         msg:"Done",
// //     })

// // })
// // app.listen(3000);
// var users =[{
//     name: "harkirat",
//        metadata:{
//         profilepicture:"",
//         pronouns:"he/him",
//         address:{
//             "kmvdfbd",
//         }
//        } 
// }]

// const user={
//     name:"John",
//     kidneys:[{
//         healthy: false
//     }]
// }

// const users =[{name:"John",
//     kidneys:[{
//         healthy: false
//     }] 
// }];

// const express= require('express');
// const app = express();

// const users=[
//     {
//         name: "John",
//         kidneys:[{
//             healthy: false,

//         }]
//     }   
// ];

// app.get("/", function(req, res){
//     const johnKidneys= users[0].kidneys;
//     const numberofKidneys=kidneys.length;
//     let numberofHealthyKidneys=0;
//         for( let i =0; i<johnKidneys.length;i++){
//             if(johnKidneys[i].healthy){
//                 numberofHealthyKidneys=numberofHealthyKidneys+1;
//             }
//         }
//         const numberofUnhealthyKidneys= numberofkidneys-numberofHealthyKidneys;
//             res.json({
//                 numberofKidneys,
//                 numberofHealthyKidneys,
//                 numberofUnhealthyKidneys
//             })
// })
// app.post("/", function(req, res){
//     const isHealthy= req.body.isHealthy;
//     users[0].kidneys.push({
//         healthy: isHealthy,

//     })
//     res.json({
//         msg:"Done!",
//     })
// })


// app.listen(3001);

const express = require('express');
const app = express();

// JSON body parser middleware
app.use(express.json());

const users = [
    {
        name: "John",
        kidneys: [
            {
                healthy: false
            }
        ]
    }
];

app.get("/", function (req, res) {
    const johnKidneys = users[0].kidneys;
    const numberofKidneys = johnKidneys.length;

    let numberofHealthyKidneys = 0;

    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberofHealthyKidneys++;
        }
    }

    const numberofUnhealthyKidneys = numberofKidneys - numberofHealthyKidneys;

    res.json({
        numberofKidneys,
        numberofHealthyKidneys,
        numberofUnhealthyKidneys
    });
});

app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;

    users[0].kidneys.push({
        healthy: isHealthy
    });

    res.json({
        msg: "Done!"
    });
});

app.delete("/", function(req, res){
    const is 
}

app.listen(3001, () => {
    console.log("Server running on port 3001");
});