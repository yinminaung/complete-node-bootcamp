const http = require("http");
const fs = require('fs');

const products = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const productsObj = JSON.parse(products);

const server = http.createServer((req, res)=> {
    if (req.url === '/' || req.url === "/home") {
        res.end("THIS IS HOME PAGE");
    } else if (req.url === '/products') {
        res.writeHead(200, {
            "Content-type": "application/json"
        })
        res.end(products);
    } else if (req.url.match(new RegExp("/products/[0-9]/"))) {
        const productId = Number.parseInt(req.url.charAt(10));
        const product = JSON.stringify(productsObj[productId]);
        if (!product) {
            res.end("No data is found in the database.");
        } else {
            res.writeHead(200, {
                "Content-type": "application/json"
            })
            res.end(product); 
        }
    } else {
        res.end("Page Not Found!");
    }
})

server.listen(8000, "127.0.0.1", () => {
    console.log("Server is running...");
})