This is an introduction to AJAX and the STACK in general.

---
- npm init
- npm install express
- installed express
- server is up with

app.listen(port, () => {
    console.log('server is up on', port); 
});

- added a git route to site /books

Setting up a basic webpage with jQuery
---

- create a public folder for scripts and vendors
- also create index.html
- move in JQ
- setup static

app.use(express.static('server/public'));

- this line should be above routes
- build out static files with html js css and libs