// const genre = Object.freeze({
//     Fantasy: "Fantasy",
//     Comedy: "Comedy"
// });
 
// // List of all people who can borrow books
// let borrowers = [
//     {
//         id: 1,
//         name: "Luke Parker"
//     }, {
//         id: 2,
//         name: "Jacinta Bealle"
//     }, {
//         id: 3,
//         name: "Dan Wills"
//     }
// ];
 
// List of books that are avaliable to be borrowed
let books = [
    {
        id: 1,
        title: "Harry Potter and the Philosopher's Stone",
        genreId: 1
    }, {
        id: 2,
        title: "Harry Potter and the Chamber of Secrets",
        genreId: 1
    }, {
        id: 3,
        title: "The Hitchhiker's Guide to the Galaxy",
        genreId: 2
    }
];
 
let genres = [
    {
        id: 1,
        name: "Fantasy"
    }, {
        id: 2,
        name: "Comedy"
    }
]
 
// List of all books currently being borrowed
let bookBorrowers = [
    {
        borrowerId: 1,
        bookId: 1
    }, {
        borrowerId: 1,
        bookId: 2
    }, {
        borrowerId: 2,
        bookId: 1
    }, {
        borrowerId: 3,
        bookId: 2
    }, {
        borrowerId: 2,
        bookId: 3
    }, {
        borrowerId: 3,
        bookId: 3
    }
];
 
function getBookById(bookId) {
    return books.find(book => book.id == bookId);
}
// console.log(getBookById(3));
function getBorrowerById(borrowerId) {
    return borrowers.find(borrower => borrower.id == borrowerId);
}
 
function getGenreById(genreId) {
    return genres.find(genre => genre.id == genreId);
}
 
function getBooksByPerson(borrowerId) {
    let booksBorrowedByPerson = bookBorrowers.filter(bb => bb.borrowerId == borrowerId);
    let bookIds = booksBorrowedByPerson.map(bb => bb.bookId);
    return bookIds.map(id => getBookById(id));
}
// console.log(getBooksByPerson(1));
 
function getPeoplebyBook(bookId) {
    let peopleWhoHaveBorrowed = bookBorrowers.filter(bb => bb.bookId == bookId);
    let borrowerIds = peopleWhoHaveBorrowed.map(bb => bb.borrowerId);
    return borrowerIds.map(id => getBorrowerById(id));
}
 
// console.log(getPeoplebyBook(2));
 
function getGenresBorrowedByPerson(borrowerId) {
    let booksBorrowed = getBooksByPerson(borrowerId);
    let genreIds = booksBorrowed.map(book => book.genreId);
    let genres = genreIds.map(id => getGenreById(id));
    return genres.map(genre => genre.name);
}
 
console.log(getGenresBorrowedByPerson(3));