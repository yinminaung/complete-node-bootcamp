const fs = require('fs');

const textIn = fs.readFileSync("./starter/txt/input.txt", "utf-8");
console.log(`The input text is\n${textIn}`);

const textOut = `This is what we know all about avacado: ${textIn}.`;
fs.writeFileSync("./starter/txt/output.txt", textOut, {flag: "a"});
