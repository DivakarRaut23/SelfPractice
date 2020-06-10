// Q1 - Use the array.map function to convert an array of strings into an array of the length of each of those strings

let myNames = ["Prithivi", "Shaw", "Marcus", "Rana", "Ibrahimovic"];

function stringToLength(element) {


    return element.length;

}

let stringLengthArray = myNames.map(stringToLength);

// console.log(stringLengthArray);


// Q2 - Create an array of numbers. Use the array.map function to add 5 to each of those numbers

let myNumber = [6, 8, 4, 10, 9];

function add5(element) {

    return element + 5;
}

let added5Array = myNumber.map(add5);
// console.log(added5Array);
// Q3 - Create an array of people with properties firstName and lastName. Use the array.map function to create an array of the full names of each of the people.

let people = [
    {
        firstName: "Divakar",
        lastName : "Raut"
    },
    {
        firstName: "Marcus",
        lastName : "Rashford"
    },
    {
        firstName: "Zlatan",
        lastName : "Ibrahimovic"
    }
];

function createFullName (object){

    
        return object.firstName + " " + object.lastName ;
    
}

let fullNameArray = people.map(createFullName);
// console.log(fullNameArray);
// Q4 - Create an array of pets with properties name (string), age (number) and owner (object with name and age). Use the array.map function to get an array of the names of all the owners.

let pets = [
    {
        name: "Aluu",
        age : 3,
        owner :{
            name: "Divakar",
            age: 31
        }
    },
    {
        name: "Tommy",
        age : 4,
        owner :{
            name: "Mille",
            age: 24
        }
    },
    {
        name: "Tiger",
        age : 2,
        owner :{
            name:"Gilbert",
            age: 27
        }
    }
];

function getOwner (object) {

    return object.owner.name ;
}

let ownerNameArray = pets.map(getOwner);

 console.log(ownerNameArray);