/**
 * difference between using . and __dirname
 */

const path = require("path");

console.log(". = %s", path.resolve("."));
console.log("__dirname = %s", path.resolve(__dirname));

// make sure to use __dirname