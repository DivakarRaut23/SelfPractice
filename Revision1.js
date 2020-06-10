// 1 Write an if statement that evaluates a boolean condition.
// Make sure the statement evaluates as false

let myBoolean = false;
if(myBoolean){
    console.log("This statement shouldnt be printed when false value is passed");
} else {
    console.log("This is a false condition so this should be printed")
}
 
// 2 Write an if statement that evaluates a number as a condition.
// Make sure the statement evaluates as false

let myNumber = 23;
if (myNumber){
    console.log("This statement shouldn't print as value passed is false");
} else {
    console.log("This statement should be print as value passed in equation is false");
}
 
// 3 Write an if statement that evaluates a negative number as a condition.
// Make sure the statement evaluates as true

let myNegativeNumber = -23 ;
if (myNegativeNumber){
    console.log("As compared value is false, this statement should not  be printed");
} else {
    console.log("As compared value is false, this statement should be printed");

}
 
// 4 Write an if statement that evaluates a string.
// Try out the following values for the string: 
// 0, false, NaN, undefined

let myString = "false"

if (myString == "false"){
    console.log("This statement should be printed as condition is true");
} else {
    console.log("This statement should not  be printed as condition is true");   
}