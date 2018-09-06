// requires
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded( {extended: true} ));// needed for post for JQ ajax
// global
const port = 5000;
let books = [];
let pings = 0;
// spin up server
app.listen(port, () => {
    console.log('server is up on', port); 
});
// get route
app.get('/books', (req, res) => {
    pings++;
    console.log('request number', pings);
    
    res.send(books);
});
//post route
app.post('/books', (req, res) => {
    books.push(req.body);
    res.send(200);
});