const app = express();
let requestCount = 0;

const loggerMiddleware = require("logger");

// app.get("/sum", function(req, res) {
//     requestCount = requestCount+1;
//     console.log("Total number of requests="+ requestCount);

//     const a= parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         ans: a+b,
//     });
// });

// app.get("/multiply",function(req, res){
//     requestCount = requestCount+1;
//     console.log("Total number of requests" + requestCount);
//     const a=  parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.json({
//     ans: a*b,
//     });
     
// });

// app.get("/sum", function(req, res){
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         ans: a*b,
//     })
// });

function requestIncreaser(req, res, next){
    requestCount= requestCount+1;
    console.log("Total number of requests"+ requestCount);


}

app.get("/sum", function(req, res){
    requestIncreaser(req, res);
    const a= parseInt(req.query.a);
    const b= parseInt(req.query.b);


    res.json({
        ans: a+b,
    });
});

app.get("/multiply", function(req, res){
    requestIncreaser(req, res);
    const a= parseInt(req.query.a);
    const b= parseInt(req.query.b);
    res.json({
    ans: a*b,
    })
});

function loggerMiddleware(req, res, next){
    console.log("Method is"+ req.method);
    console.log("Host is " + req.url);
    console.log("Host is "+ req.hostname);

    console.log(newDate());
    next();
   
}

app.use(loggerMiddleware);

app.get("/sum", function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
ans: a+b,
    });
});
