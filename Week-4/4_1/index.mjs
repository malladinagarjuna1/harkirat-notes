
import chalk from 'chalk';
console.log(chalk.blue('Hello world'));
const fs = require("fs");
fs.readFile("a.txt",function(err, data){
    console.log(data);
})
