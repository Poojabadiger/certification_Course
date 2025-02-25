// let fs = require('fs');

//perform CRUD operation

// let data = "hii today's weather is cool";

//task-1 create a file and write data into it
//way-1
// fs.writeFile('demo.txt',data,{
//     encoding:'utf-8'
// },(err)=>{
//     if(err) throw err;
//     console.log("file is created successfully");
// })

//way-2
// fs.writeFileSync('demo.txt',data,
//     (err)=>{
//         if(err) throw err;
//         console.log("file is created successfully");
//      });

//read a file
// let fileread = fs.readFileSync('demo.txt');
// console.log(fileread.toString());

//UPDATE A FILE
// fs.appendFileSync('demo.txt','\n I hope this weather will be same for next days');

//delete data
// fs.unlinkSync('demo.txt');

let fs = require('fs');
let data = "hello welcome kle bca college nipani";
fs.writeFileSync('demo.txt',data,(err)=>{
    if(err) throw err;
    console.log("file is create is created successfully");
});

let readfile=fs.readFileSync('demo.txt');
console.log(readfile.toString());

fs.appendFileSync('demo.txt','\n PHP,AI,MAD');
fs.unlinkSync('demo.txt');
