
$(document).ready(onReady);

function displayBooks(books){
    let el = $('#booksOut');
    el.empty();
    for(let book of books){
        let newBook = `
        <li>${book.title}, by ${book.author}. A ${book.genre} novel 
        with ${book.pages} pages.
        </li>`
        el.append(newBook);
    }
}//end displayBooks

function getBooksFromServer(){
    //AJAX call to /books
    $.ajax({
        method: 'GET',
        url: '/books'
    }).then( (response) => {
        displayBooks(response);
        
    })
}//end getBooksFromServer

function onReady (){
    getBooksFromServer()
    console.log('ready');
    
}//end readyNow
