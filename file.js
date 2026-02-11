const { log } = require("console");
const fs = require("fs");

// /// Sync - blocking
// fs.writeFileSync("./test.txt", "Hey There!, how are u??");

// /// Asycn - Non -blocking

// fs.writeFile("./test.txt", "Hey There!, how are u?? Aysnc",()=>{});

// const result = fs.readFileSync("./contact.txt","utf-8");

// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error---", err)
//     }else{
//         console,log("Output---",result)
//     }
// });

// console.log(result)

// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

// fs.cpSync("./test.txt","./copy.txt");

// fs.unlinkSync("./copy.txt")

// console.log(fs.statSync("./test.txt").isFile())

// fs.mkdirSync("./my-docs/a/b",{recursive: true})

////   can delete them using:
// fs.rmSync("./my-docs", { recursive: true, force: true });

// console.log("1")

// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error---", err)
//     }else{
//         console,log("Output---",result)
//     }
// });

// console.log("2")


// const os = require('os');

// console.log("CPU -->",os.cpus().length)


fs.mkdirSync("HTTP-Server")

// fs.rmSync("./HTTP-Server", { recursive: true, force: true });