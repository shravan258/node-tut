//path
const path = require("path");
console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

//to access last name ie test.txt
const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
