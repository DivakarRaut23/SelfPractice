// Q1 - Create an array of numbers. Use array extension methods to find whether all the elements in the array have a value that is not divisible by 5

let myNumbers =[ 32,5,65,25,30,95];

let divisibleby5 = myNumbers.every( num => num % 5 == 0);
// console.log(divisibleby5);


// Q2 - Create an array of strings. Use array extension methods to find whether any of the elements begin with a vowel.


let myStrings =["David", "Orchid", "JavaScript", "Rihanna", "Umbrella"];

let elementsBeginWithVowels = myStrings.some(word =>{

 return ( (word[0].toLowerCase() == 'a')|| (word[0].toLowerCase() == 'e') ||  (word[0].toLowerCase() == 'i') ||  (word[0].toLowerCase() == 'o') ||  (word[0].toLowerCase() == 'u')) });


// console.log(elementsBeginWithVowels);



// Q3 - Create an array of pets (name, age, owner) and use array extension methods to find whether any of the pets are owned by Luke.

let myPets = [
    {
        name : "Tommy",
        age : 4,
        owner: "Zlatan"
    },
    {
        name : "Rex",
        age : 7,
        owner: "Luke"
    },
    {
        name : "Tiger",
        age : 8,
        owner: "Raut"
    },
    {
        name : "Tuarkky",
        age : 8,
        owner: "Raut"
    }
];


for (let pet of myPets){
    if (pet.owner.toLowerCase() == "luke"){
        // console.log(`${pet.name} is the pet owned by Luke`);
    }
}

// let petOwnedByLuke = myPets.some(pet => pet.owner.toLowerCase() == "luke");

// console.log.name(petOwnedByLuke);

// Q4 - Jimmy is scared of the letter Q, write some code that takes in an array of pet objects (name, age, owner) and
//  tells Jimmy's parents if the array contains any pets that have a name or owner with the letter Q. You must use a for..in loop for this.

// for (let pet of myPets){
//     if (pet.name.toLowerCase().includes("q") || ( pet.owner.toLowerCase().includes("q")) ) {

//         console.log(pet.name);
//     }
// }

function findPetIncludingQ(pet){
    for (const key in pet){
        const element = pet[key].toString().toLowerCase();
        if (element.includes("q")){
         return key.element;
        }
    }
}

let hasQ = myPets.filter(findPetIncludingQ);
console.log(hasQ);