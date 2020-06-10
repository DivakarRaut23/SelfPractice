// Q1 - Create an array of numbers and use the array.reduce method to find the smallest number in the array
const myNumbers = [7, 23, 56, 4, 3, 8];

const minValue = myNumbers.reduce((acc,value) => Math.min(acc, value));

// console.log(minValue);



// Q2 - Create an array of strings and use the array.reduce method to find the length of the longest string in the array

let myStrings = ["JavaScript", "Python", "Java", "TypeScript"];

function longestString (string1,string2)  {
    return string1.length > string2.length ? string1.length : string2.length;
}

const longest = myStrings.reduce(longestString);
console.log(`The longest String in the array is ${longest} characters long `);

// Q3 - Create an array of objects called bankers. Each should have a name (string) and netWorth (number).
//  Use the array.reduce method to find the total netWorth of all the bankers. Then use that number to calculate the average netWorth of all the bankers.


let bankers = [
    {
        name: "Divakar",
        netWorth: 500000
    },
    {
        name: "Billy",
        netWorth: 200000
    },
    {
        name: "Will",
        netWorth: 1000000
    }
];

let total = bankers.map( obj => obj.netWorth).reduce((a,c) => {return a + c});
let average = parseInt(total / bankers.length);

console.log(`The Average net Worth of Bankers is $${average}`);

console.log(`The total net Worth of Bankers is $${total}`);