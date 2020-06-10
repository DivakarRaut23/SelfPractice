    
// Create an array of names
let names = [ "Divakar", "Beckham", "Zlatan", "Java", "Programming", "Francis"];

// Create an array of numbers

let numbers = [23, 6, 56,34, 9, 22, 91];


// Q1 - Write some code to find the first name in the names array that starts with an "F"

 const startingwithF =  names.find(element => element[0] == "F" );
// console.log("Question no 1 :")
//  console.log(startingwithF);
//  console.log("--------------")
//  console.log()


// Q2 - Write some code to find the first number in the numbers array that is smaller than 10
const smallerThan10 = numbers.find(element => element < 10);
// console.log("Question no 2 :")
// console.log(smallerThan10);
// console.log("--------------")
//  console.log()

// Q3 - Write some code to find all the names that are 4 or less characters long
const lessThan4Char = names.filter(element => element.length <= 4 );
// console.log("Question no 3 :")
// console.log(lessThan4Char);
// console.log("--------------")
// console.log()

// Q4 - Write some code to find all the numbers in the numbers array that are divisible by 3

const divisibleBy3 = numbers.filter(element => element % 3 == 0 )
// console.log(divisibleBy3);

// Create an array of people with the following properties: firstName, lastName, age

let people =[ 
    {
        firstName: "Zlatan",
        lastName: "Ibrahimovic",
        age : 38
    },
    {
        firstName: "David",
        lastName: "Beckham",
        age : 16
    },
    {
        firstName: "Alison",
        lastName: "Baba",
        age : 17
    },
    {
        firstName: "Alex",
        lastName: "Ferguson",
        age : 62
    }

];


// Q5 - Write some code to find the first person that is under 18 years old and log their full name;
// for (let person of people){
//     if(person.age < 18 ){
//         console.log(`${person.firstName} ${person.lastName}`);
//     }
// }

// function studentUnder18(people){
// return person.age < 18 ;

// }

let studentUnder18 = people.find(person => person.age <18 );
// console.log(`${studentUnder18.firstName} ${studentUnder18.lastName}`);
// Q6 - Write some code to get an array of all the people that have more than 10 characters in 
// their first and last names combined (eg. Luke Parker has exactly 10 characters and should not be included)

// for (let person of people){
//     let fullName = person.firstName + person.lastName;
//     if (fullName.length > 10){
//         console.log(`${person.firstName} ${person.lastName}`);
//     }
// }

let moreThan10Characters = people.find(person => ((person.firstName.length + person.lastName.length) > 10));
 

// console.log(moreThan10Characters);
   
// Q7 - Write some code to find all the people that have their last name longer than their first name.

// for (let person of people){
//     if (person.lastName.length > person.firstName.length){

//         console.log(`${person.firstName} ${person.lastName}`)
//     }
// }


// function lastNameVsFirstName (people) {
//    return  (people.lastName.length > people.firstName.length);
//     }
// 

let lastNameVsFirstName = people.filter(person => (person.lastName.length > person.firstName.length) );
console.log(lastNameVsFirstName);



