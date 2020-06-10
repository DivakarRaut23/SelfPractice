// Q1 - Create an array of objects called libraries. Each should have the following properties: 
// name which should be a string, address which should be a string and headLibrarian which should be an object with properties name and age.
let libraries = [
    {
        name: "Macarthur Library",
        address: "Macarthur",
        headLibrarian: {
            name: "Zlatan",
            age: 27
        },

    },

    {
        name: "Manchester Library",
        address: "Manchester",
        headLibrarian: {
            name: "Fergie",
            age: 62
        }

    },
    {
        name: "Espanyol Library",
        address: "Espanyol",
        headLibrarian: {
            name: "Marshall",
            age: 23
        }

    }


];

// console.log(libraries);

// Q2 - For each Library, add a property called books which sholuld be an array of objects. Each book should have the following properties: title, author, yearOfPublication
libraries[0].books = [
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        yearOfPublication: 1813
    },
    {
        title: "The Red and the Black",
        author: "Stendhal",
        yearOfPublication: 2014
    },
    {
        title: "This is Love",
        author: "Paul Signam",
        yearOfPublication: 1988
    },
    {
        title: "Inside the Ocean",
        author: "Martin Krintox",
        yearOfPublication: 1990
    },
    {
        title: "Ali Baba and Forty Thieves",
        author: "Jack Ma",
        yearOfPublication: 1995
    },
    {
        title: "Holiday home",
        author: "Jarrod Milson",
        yearOfPublication: 1999
    }

];

libraries[1].books = [
    {
        title: "David CopperField",
        author: "Charles Dickens",
        yearOfPublication: 2007
    },
    {
        title: "Wuthering Heights",
        author: "Emily Bronte",
        yearOfPublication: 1995
    }

];

libraries[2].books = [
    {
        title: "War and Peace",
        author: "Tolstoy",
        yearOfPublication: 1958
    },
    {
        title: "I am Zlatan",
        author: "David Lagercrantz",
        yearOfPublication: 2013
    },
    {
        title: "David Beckham",
        author: "Mr Author",
        yearOfPublication: 1995
    },
    {
        title: "Merci",
        author: "Patrick Vincent",
        yearOfPublication: 1978
    }

];

// console.log(libraries);
// Q3 - Use for..of and/or for..in loops to write the book titles across all the libraries that have been published in the last 20 years.

// for (const libraryObject of libraries){

//     for (const book of libraryObject.books){
//         if( book.yearOfPublication >= 2000){
//             // console.log(book.title);
//         }
//     }
// }


// Q4 - Use for..of and/or for..in loops to write all of the authors of books that appear in a library with a librarian that is under 30 years old.

// for (const libraryObject of libraries) {

    
//         if (libraryObject.headLibrarian.age < 30) {

//             for (const book of libraryObject.books){
//                 console.log(book.author);
//             }
            
        
//     }
// }

// Q5 - Use for..of and/or for loops to write all the names of libraries that have at least 3 books published before 2000


for (const library of libraries){

    
    count = 0;

  for (const book of library.books){


    if ( book.yearOfPublication <2000 ){
        count ++;
    }

  }
  if(count >3 ){
      console.log(library.name);
  }
     
    }
    





