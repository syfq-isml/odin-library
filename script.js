let myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.exists = false;
}


function makeObject() {
    let newBook = new Book(form.name.value, form.author.value, form.pages.value, form.read.value);
    console.log(newBook);
    return newBook;
}

function addBookToLibrary() {
    myLibrary.push(makeObject());
    console.log(myLibrary);
    dialog.close();

    createCardOnce();
}

function createCardOnce() {
    myLibrary.forEach((book, index) => {
        if (book.exist === true) return;

        console.log(index);
        createCardDiv(book, index);
        book.exist = true;
    })
}

// ^^ to add data-attr to assign index
// 2nd parameter is index

function createCardDiv(book, index) {
    let newCard = document.createElement('div');
    newCard.classList.add("card");
    
   

    newCard.setAttribute('style', 'white-space: pre-line;');
    newCard.textContent = 
    `Name of Book: ${book.name} \n
    Name of Author: ${book.author} \n
    No. of Pages: ${book.pages} pages`;

    let readBtn = document.createElement('button');
    readBtn.classList.add("read-btn");
    readBtn.textContent = "READ";
    

    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-lib-index', `${index}`);
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "DELETE";
    deleteBtn.addEventListener('click', deleteCard);
    
    newCard.appendChild(readBtn);
    newCard.appendChild(deleteBtn);
    cardContainer.appendChild(newCard);
}

function deleteCard(e) {
    //target's data attribute
    //find data attribute in lib
    //remove aka splice

    //deletes array from library
    console.log(e) // e.target.dataset.libIndex = '1'
    let libIndex = e.target.dataset.libIndex;
    console.log(e.target.dataset.libIndex);
    myLibrary.splice(+libIndex, 1);
    console.log(myLibrary);

    //deleteCard
    e.target.closest('.card').remove();

    updateIndexOfDelBtn();
}

function updateIndexOfDelBtn() {
    let deleteBtn = document.querySelectorAll('.delete-btn');
    deleteBtn.forEach((btn, index) => {
        btn.dataset.libIndex = `${index}`;
    });
}




let newBook = document.querySelector('.new-book');
let dialog = document.querySelector('#new-book-modal');
let cancelButton = document.querySelector('.cancel-btn');
let submitButton = document.querySelector('.submit-btn');
let form = document.querySelector('form');

let inputName = document.querySelector('input#name');

let cardContainer = document.querySelector('.card-container');



newBook.addEventListener('click', () => dialog.showModal());

cancelButton.addEventListener('click', () => dialog.close());

submitButton.addEventListener('click', addBookToLibrary);





/* PLANNING 

add to Lib array - .push



--- PSEUDO CODE ---

*adding books to library*
lib is empty
object pushed into Lib array

*display existing books on page load*
call prototype function
create new div for card
prototype function creates words
use textCOntent for words to appear

*user clicks NEW BOOK*
modal appears
user enters input
    use input.value to refer to input
on click => book is added

addObject function on submit button click








*/