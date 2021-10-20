"use strict";

var express = require("express");

var path = require("path");

var app = express();
var port = 8000;

var bodyParser = require("body-parser");

var mongoose = require('mongoose');

main()["catch"](function (err) {
  return console.log(err);
});

function main() {
  return regeneratorRuntime.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(mongoose.connect('mongodb://localhost:27017/contactDance'));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
} //define mongoose schema 


var contactSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  address: String,
  description: String
});
var Contact = mongoose.model('Contact', contactSchema); // EXPRESS SPECIFIC STUFF

app.use('/static', express["static"]('static')); // For serving static files

app.use(express.urlencoded()); // PUG SPECIFIC STUFF

app.set('view engine', 'pug'); // Set the template engine as pug

app.set('views', path.join(__dirname, 'views')); // Set the views directory
// ENDPOINTS

app.get('/', function (req, res) {
  var params = {}; // res.status(200).render('index.pug', params);

  res.status(200).render('home.pug', params);
});
app.get('/contact', function (req, res) {
  var params = {}; // res.status(200).render('index.pug', params);

  res.status(200).render('contact.pug', params);
});
app.post('/contact', function (req, res) {
  var myData = new Contact(req.body);
  myData.save().then(function () {
    res.send('This item has been saved to the database');
  })["catch"](function () {
    res.status(404).send('Item couldnt be sent to the database');
  }); // res.status(200).render('index.pug', params);
  // res.status(200).render('contact.pug');
}); // START THE SERVER

app.listen(port, function () {
  console.log("The application started successfully on port ".concat(port));
});