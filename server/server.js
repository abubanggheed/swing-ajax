// requires
const express = require('express');

const app = express();
// uses
app.use(express.static('server/public'));
// global
const port = 5000;
// spin up server
app.listen(port, () => {
    console.log('server is up on', port); 
});
// get route
app.get('/books', (req, res) => {
    console.log('in /books GET');
    res.send('sending to /books');
});