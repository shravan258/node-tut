const { readFileSync, writeFileSync } = require("fs");
console.log("start");

const first = readFileSync("./content/subfolder/first.txt", "utf8");
const second = readFileSync("./content/subfolder/second.txt", "utf8");

// console.log(first, second);
writeFileSync(
  "./content/subfolder/result-sync.txt",
  `here is the result : ${first},${second}`,
  { flag: "a" }
);
console.log("done with this task");
console.log("starting with next");
