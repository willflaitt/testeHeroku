//console.log("teste");

const http1 = require("http");

const hostname = "localhost";
const port = 3333;

const server = http1.createServer((req, res)=>{

    res.setHeader("Content-type", "text/plain");
    res.end("oi oi oi");

})

server.listen(port , hostname, ()=>{
    console.log("servidor online");
});

