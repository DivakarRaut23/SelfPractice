// Declare an array of objects with properties name and age. Use an array.forEach loop to iterate over each object 
// and print the name and age of the object to the console. Do the same using a for and for..of loop

let people = [
    {
        name: "Abrahim",
        age:23
    },
    {
        name: "Samantha",
        age:36
    },
    {
        name: "Gabriel",
        age:14
    },
    {
        name: "Michael",
        age:44
    }
];

// people.forEach((person) => {
//     console.log(`${person.name} is ${person.age} years old`);
// });

// for (let person of people){

//     console.log(`${person.name} is ${person.age} years old`);

// }

for (let i =0; i < people.length; i++){
    let person = people[i];
    console.log (`${person.name} is ${person.age} years old`);
}