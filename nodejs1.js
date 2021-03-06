// console.log("Hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Practice</title>
  </head>
  <style>
      .blocks {
          border: solid red;
          width: 250px;
          height: 250px;
          /* display: inline-block; */
      }
  
      #right {
          position: absolute;
          top: 10px;
          right: 10px;
          color: red;
          background-color: aquamarine;
  
      }
  
      #bottom {
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 20px;
          text-align: center;
          color: green;
          background-color: bisque;
      }
  
      #bottom a {
          text-decoration: none;
          color: black;
      }
  
      #left {
          color: purple;
          background-color: black;
      }
  
      #btn {
          display: block;
          margin: auto;
          padding: 5px;
      }
  </style>
  
  <body>
      <div class="blocks" id="right">
          <p>My personal information</p>
      </div>
      <div class="blocks" id="left">
          <p>My fav Movies</p>
  
      </div>
      <div class="blocks" id="bottom">
          <p><a href="#">A</a></p>
          <p><a href="#">B</a></p>
          <p><a href="#">C</a></p>
          <p><a href="#">D</a></p>
  
      </div>
  
      <button type="submit" id="btn" onclick="colorchanger()">Change Color</button>
  
      <script>
          function generateRandomColor() {
              var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
              return randomColor;
              //random color will be freshly served
          }
          
          function colorchanger(color) {
              document.getElementById("right").style.backgroundColor = generateRandomColor();
              document.getElementById("left").style.backgroundColor = generateRandomColor();
              document.getElementById("bottom").style.backgroundColor = generateRandomColor();
          }
  
          // var name = prompt("Enter your name");
          // document.write(name);
          </script>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});