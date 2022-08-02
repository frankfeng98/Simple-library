let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.page = pages;
    this.read = read;
    this.info = function(){
        return read ? `${this.title} by ${this.author}, ${this.page} pages, read` 
            : `${this.title} by ${this.author}, ${this.page} pages, not read yet`;
    }
}

function addBookToLibrary(book){
    myLibrary.push(book);
    display();
}

function display(){
    const display = document.querySelector(".library");
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));

    myLibrary.forEach(book => {
        createBook(book);
    });
}

function createBook(book){
    const library = document.querySelector(".library");
    const bookToBeAdded = document.createElement("div");
    bookToBeAdded.classList.add("book");

    const title = document.createElement("p");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = book.author;

    const page = document.createElement("p");
    page.textContent = book.page;

    const read = document.createElement("button");
    read.textContent = book.read ? "Read" : "Not read yet";
    read.addEventListener('click', () => {
        book.read = !book.read;
        display();
    })

    const remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.classList.add("remove");
    remove.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(book), 1);
        display();
    })

    bookToBeAdded.appendChild(title);
    bookToBeAdded.appendChild(author);
    bookToBeAdded.appendChild(page);
    bookToBeAdded.appendChild(read);
    bookToBeAdded.appendChild(remove);

    library.appendChild(bookToBeAdded);
}

function handleInput(){
    const title = document.querySelector("#Book").value;
    const author= document.querySelector("#Author").value;
    const page = document.querySelector("#Page").value;
    const read = document.querySelector("#Status").value;
    const bookToBeAdded = new Book(title, author, page, read == "read" ? true : false);
    addBookToLibrary(bookToBeAdded);
    form.reset();
}

const form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    handleInput();
    e.preventDefault();
});