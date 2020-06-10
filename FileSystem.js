// File System
// Create a function that takes 2 arguments. The first should be a file name and the second should be content. The function should create a file with the given name in the current directory with content equal to the content argument
const fs = require("fs");
const path = require("path");

function fileWriter (fileName, content){

fs.writeFileSync(path.join(__dirname, fileName), content);

}

// fileWriter("myJava.txt", "lets do this and try ");

fileWriter("Test.txt", "can i just know this JavaScript inside out pleaseeeeeeee");

// let myFileContent = fs.readFileSync(path.join(__dirname,"JavaClass.txt"));
// console.log(myFileContent.toString());


// Create a function that takes 1 argument, a file name. The function should return a string that is the whole file.
// JSON
// Create a class called student. It should have 4 properties (firstName, lastName, age, grades) with a constructor to set them all. Create an instance method that returns a json string representing the object.
// Create a static method that takes a json string representing the object and returns a new instance of student
// Reading and Writing JSON Files
// Create a method that writes an array of students to a json file
// Create a method that retrieves a list of students from a json file and returns them as student objects
// Daily Challenge
// Following from the work done in class today, create a TeacherDataReader similar to the StudentDataReadere,