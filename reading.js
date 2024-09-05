const { readFile } = require("fs");

console.log("This is the first task");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log("Error");
    return;
  }
  console.log(result);
  console.log("Continue");
});
console.log("Next task");
