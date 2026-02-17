const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {

    if (req.url === "/favicon.ico") return res.end();

   const log = `${Date.now()}:${req.method} New Req Received!!\n`;

    const myUrl = url.parse(req.url, true);
    // console.log(myUrl);

    fs.appendFile("./log.txt", log, (err, data) => {
        if (err) {
           
            res.end("Error writing log");
        } else {

            switch (myUrl.pathname) {
                case "/":
                     if(req.method === "GET") res.end("Welcome to Home Page, You are on Home page");
                    break;

                case "/about":
                    const username = myUrl.query.myname;
                    res.end(`Hi ${username}`);
                    break;

                case "/search":
                    const search = myUrl.query.myname;
                    res.end("Here are your result for" + search);
                    break;

                case "/signup":
                    if (req.method === "GET") res.end("This is the sign up page");
                        else if (req.method === "POST") res.end("Success!");
                    break;
                default:
                    res.end("404 not found");
            }

        }
    })
});

myServer.listen(8000, () => console.log("server started!!!"))