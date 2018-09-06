
$(document).ready(onReady);

function addBook(){
    let objectToSend = {
        title: $('#titleIn').val(),
        author: $('#authorIn').val(),
        genre: $('#genreIn').val(),
        pages: $('#pagesIn').val()
    };
    console.log('object to send is', objectToSend);
    $.ajax({
        method: 'POST',
        url: '/books',
        data: objectToSend
    }).then( (response) => {
        console.log('back from server with response', response);
        
    }).catch( (error) => {
        alert('error:', error);
    });
    getBooksFromServer();
}//end addBook

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
    $('#addBookBtn').on('click', addBook);
    
}//end readyNow
