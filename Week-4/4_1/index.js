
// // function sum(a,b){
// //     return a+b;
// // }

// // function multiply(a,b){
// //     return a*b;

// // }
// // console.log(sum(1,2));

// const path = require("path");
// console.log(_dirname);
// console.log(_dirname+"../../index.js"+"/projects"+"/index.js");

// console.log(path.join(_"/users", "index.js","/projects","index.js"))
// const fs = require1
// explains the difference between the thenables and prominse not required though
// const thenable ={
//     then: function(onfulfilled){
//         setTimeout(()=> onfulfilled(42), 1000);
    
// }};
// const p = new Promise(function(){})
// console.log(p);

// console.log(thenable);
// async function main(){
//     const v= await thenable.then(function(){
//         console.log("hi there");
//     });
// }
//a program to count the number of words in the given text file
// const  fs = require("fs");
// function main(fileName){
//     fs.readFile(fileName,"utf-8" ,function(error, data){
//         let total =0;

//     for( let i =0; i<data.length; i++){
//         console.log(data[i]);

//         if(data[i]===" "){
//         total++;

//         }
//     }
//     console.log(total+1);
//     })

// }
// main("a.txt");
// using commander.js library
// program to count the number of lines in the given file 

const fs = require('fs');
const {Command} = require('commander');
const program = new Command();

program 
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0')

  program.command('count')
  .description('CLI to do file based tasks')
  .argument('<file>','file to count')
  .action((file) => {
    fs.readFile(file, 'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            const lines = data.split('\n').length;
            console.log(`there are ${lines} lines in ${file}`);

        }
    });
  });

  
program.parse();
// originally when i use "node index.js to run this file" then it showed the error
// Usage: counter [options] [command]

// CLI to do file based tasks

// Options:
//   -V, --version   output the version number
//   -h, --help      display help for command

// Commands:
//   count <file>    CLI to do file based tasks
//   help [command]  display help for command
//    so in order to make the commander files run
// we have  to use these commands
// ✅ Example Usages
// What You Run	What It Does
// node cli.js --help	Shows the help screen
// node cli.js --version	Shows 0.8.0
// node cli.js count a.txt	Counts lines in a.txt
// node cli.js help count	Shows help for the count command

//

//there is a program for word one also

// const fs = require('fs');
// const {command}= require("commander");
// const  program = new Command();

// program
//    .name('counter')
//    .description('CLI to do the file task')
//    .version(0.8.0)
  
//    program.command('count')
//    .description('CLI to do file based tasks')
//    .argument('<file>', 'file to count')
//    .action((file)=>{
//      fs.readFile(file, 'utf-8',(err,data)=>{
//       if(err){
//         console.log(err);

//       }
//       else{
//         const line = data.split('\n').length;
//         console.log(`there are ${lines} lines in ${file}`);
//       }
//      });
//    });


// program.parse();


// const fs = require('fs');
// const {command}= require{"commander"};
// const program = new Command();

// program
//   .name('counter');
//   .description('cli to do file based task')
//   .version('0.8.0')

//   program
//   .command('count')
//   .description('CLI to do file baed tasks')
//   .argument('<file>', 'file to do count')
//   .action((file)=>{
//     fs.readFile(file, 'utf-8', (err,data)=>{
//       if(err){
//         console.log(err);
//       }
//       else{
//         const line = data.split('/n').length;
//         console.log(`there are ${lines} lines in ${file}`);
//       }
//     });
//   });

//   program.parse();