const lib = require('./array.js')
const fs = require('fs');
const express = require("express");
// const server = express();
// server.listen(8080);

const http = require('http');
// const data = {age : 5};
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync("data.json", 'utf-8'));
const users = data.user;
const server = http.createServer((req, res) => {
    // console.log("server started");
    // console.log(req.url);
    // res.setHeader("Dummy","Dummy value");
    // res.setHeader("Content-Type","application/json");
     // res.end(JSON.stringify(data));
    // res.setHeader("Content-Type","text/html");
    // res.end("hello this is a response from the server. it expects the html page by default.")
    // res.end(index);
    // res.end(data);

    // if (req.url.startsWith('/user')) {
    //     const name = req.url.split('/')[2];
    //     const usr = users.find(u => u.name === name);
    //     console.log(usr);
    //     res.setHeader("Content-Type", "text/html");
    //     res.end("This is a users page");
    // }
    switch (req.url) {
        case '/':
            res.setHeader("Content-Type", "text/html");
            res.end(index);
            break;
        // case '/user':
        //     res.setHeader("Content-Type","text/html");
        //     let modified_index = index.replace("Hello World",user.name);
        //     res.end(modified_index);
        //     break;
        case '/api':
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(data));
            break;
        default:
            res.writeHead(404);
            res.end();
    }
});

server.listen(8080);

// const text = fs.readFileSync('text.txt','utf-8'); //it reads the file in synchronous manner.
// fs.readFile('text.txt','utf-8',(err,txt)=>{
//     console.log(txt);
// });
// lib.diff(3,1);
// lib.sum(2,3);

