const http = require("http");

const fs = require("fs");

const myServer = http.createServer((req, res)=>{
    // console.log("new req received!");
    // console.log(req.headers);

    const log = `${Date.now()}:${req.url} New Req Received!!\n`
    fs.appendFile("./log.txt",log,(err,data)=>{
       if(err){
        res.end("Error writing log");
    } else {
        res.end("Hello from Server Again!!");
    }
    })
});

myServer.listen(8000, ()=> console.log("server started!!!"))