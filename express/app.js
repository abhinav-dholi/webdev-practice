const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs')

const port= 8000; // default

//EXPRESS SPECIFIC

app.use('/static', express.static('static')) //for serving static files
app.use(express.urlencoded({ extended: true }))
// app.use(bodyParser.json());

// PUG SPECIFIC
app.set('view engine', 'pug'); // set template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the views directory

//ENDPOINTS

app.get('/', (req, res) => {

    const con = "this is the content bleh bleh bleh bleh";
    const params = {
        'title': 'Pug pr sab chaltay',
        "content": con
    }
    res.status(200).render('index.pug', params);
})

app.post('/',(req, res)=> {

    fullname = req.body.name;
    address = req.body.address;
    age = req.body.age;
    gender = req.body.gender;
    more = req.body.more;

    let outputtowrite = `the name of the client is ${fullname}, the age of the client is ${age}, the gender of the client is ${gender} and the address is ${address}. More about him: ${more}`

    fs.writeFileSync('output.txt', outputtowrite);

    const params = {
        'message': 'form submitted successfully'
    }

    res.status(200).render('index.pug',params);
})

//START THE SERVER

app.listen(port, () => {
    console.log(`application has started listening on port ${port}`);

});



    //Pug demo endpoint
    
    // app.get("/demo", (req, res) => {
    //     // res.status(200).send('Home page');
    //     res.status(200).render('demo', { title: 'Hey Dholi pug here', message: 'Hello there!' })
    // });
    
    
    
    // app.get("/", (req, res) => {
    //     res.status(200).send('Home page');
    // });
    // app.get("/about", (req, res) => {
    //     res.send('about page');
    // });
    // app.post("/about", (req, res) => {
    //     res.send('about page through post request');
    // });
