// Synchronous or blocking 
// -line by line execution guaranteed.
const fs = require('fs');
fs.readFile("send.txt", "utf8", (err, data) => {
    console.log(err, data)

});
console.log("This is a message")
// Asynchronous or non-blocking
// -line by line execution not guaranteed, callbacks will fire.


