const http = require('http');
const fs = require('fs');

// htmls
const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, "utf-8");
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`, "utf-8");

const server = http.createServer((req, res)=> {
    if (req.url === "/" || req.url === "/overview") {
        res.writeHead(200, {
            "Content-type": "text/html"
        });
        res.end(tempOverview);
    } else if (req.url === "/products") {
        res.end(tempProduct);
    } else {
        res.writeHead(404);
        res.end("<h1>Page Not Found</h1>");
    }
})

server.listen("8000", "localhost", () => {
    console.log("Server is running.");
});