// requires
const express = require('express');

const app = express();
// uses
app.use(express.static('server/public'));
// global
const port = 5000;
let books = [];
///Temp
let tempBook = {
    title: 'Goose Hunt',
    author: 'Some Guy',
    genre: 'Mystery',
    pages: '555'
}
books.push(tempBook);
///End Temp
// spin up server
app.listen(port, () => {
    console.log('server is up on', port); 
});
// get route
app.get('/books', (req, res) => {
    res.send(books);
});
