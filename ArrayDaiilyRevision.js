// Q1 - Declare an empty array using the new Array syntax
    let emptyArray = new Array();
    // Q2 - Push 3 string values to the array
    emptyArray.push("JavaScript");
    emptyArray.push(" TypeScript ");
    emptyArray.push("Java ");
// Q3 - Log all the string values in reverse order (last element logged first, etc.)
for( let i= emptyArray.length -1; i >= 0 ; i--){
    // console.log(emptyArray[i]);
}
// Q4 - Create an array of numbers. There should be at least 4 elements in the array
    let myNumberArray = [34,9,7,23,42,88,77,45,68];

// Q5 - Add a new element at the start and end of the array
    myNumberArray.unshift(21);
    myNumberArray.push(99);

    // console.log(myNumberArray);

// Q6 - Log all the elements with an even index
for (let i = 0; i < myNumberArray.length; i=i+2){
        // console.log(myNumberArray[i]);

}
// Q7 - Log all the elements that are divisible by 2 (use a for..in loop)

for (let index of myNumberArray){
    if(index % 2 == 0){
        // console.log(index);
    }
}
// Q8 - Create a new array and fill it with all the elements that are greater than or equal to 10
let newArray = [];
for (let index of myNumberArray){
    if (index > 10 ){
        newArray.push(index);
    }
}
console.log(newArray);