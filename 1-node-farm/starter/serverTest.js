const http = require('http');
const url = require('url');


const server = http.createServer((req, res)=> {
    if (req.url === '/' || req.url === "/home") {
        res.end("This is HOME PAGE.");
    } else if (req.url === '/shops') {
        res.end("This is SHOP PAGE.");
    } else {
        res.writeHead(404, {
            "Content-type" : "text/html",
            "my-own-type": "Hello",
            "my-second": "Second"
        });
        res.end("<h1>FILE NOT FOUND!</h1>")
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Server is running!");
})