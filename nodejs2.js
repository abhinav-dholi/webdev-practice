const fs = require('fs');
let text = fs.readFileSync("send.txt", "utf8");
text = text.replace("abhinav", "bleh bleh");

console.log("The content of the file is: ");
console.log(text);

console.log("creating a new file...");
fs.writeFileSync("nodedemo.txt", text);
