// Q1 Create a function that takes in a name and writes "Hello" and then the person's name to the console.
// const greetPerson = name => console.log(`Hello  ${name}`);
// greetPerson("Raut");


// Q2 Create a function that takes in a name and returns a string with the value "Hello" and then the person's name

// const greetPersonReturn = name =>     `Hello  ${name}`;
// let myGreetReturn = greetPersonReturn("Zlatan");

//  console.log(myGreetReturn);

 // Q3 Create a function that takes in 2 numbers and logs the largest of those numbers to the console

//  const findLargest =  (num1, num2) => {
//      if (num1 > num2){
//          console.log(`The Largest between ${num1} and ${num2} is ${num1}`)
//      } else {
//         console.log(`The Largest between ${num1} and ${num2} is ${num2}`)
//      }
//  }

//  findLargest(13,23);

// Q4 Create a function that takes in 2 numbers and returns the smallest of those numbers

const findSmallest = (num1 , num2) => {
    if (num1 < num2){
        return `The Smallest between ${num1} and ${num2} is ${num1}` ;
    } else {
       return `The Smallest between ${num1} and ${num2} is ${num2}` ;
    }
}
let mySmallest = findSmallest(36, 89);
console.log(mySmallest);