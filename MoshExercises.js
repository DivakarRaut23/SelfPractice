// let post = {
//     title: 'Palpasa Cafe',
//     body: 'An award winning Novel',
//     author: "Narayan Wagle",
//     views: 23545,
//     comments: [
//         {author: "Azamat Bhagatov", body:"Amazing novel"},
//         {author: "Borat Shachdev", body:"One of my favourite Novel"}
//     ],
//     isLive: true
// };

// let post = new Post("Hari Bahadur", "Life story of Hari Bahadur", "Hari bansha Acharya";

// console.log(post);

// function Post(title, body, author){
//     this.title= title;
//     this.body= body;
//     this.author = author;
//     this.views = 0;
//     this.comments= [];
//     this.isLive = false;
// // }

// let priceRanges = [
//     {label:"$", tooltip: "Inexpensive", minPerPerson:0, maxPerPerson :10 },
//     {label:"$$", tooltip: "Mid Range", minPerPerson:11, maxPerPerson :20 },
//     {label:"$$$", tooltip: "Expensive", minPerPerson:21, maxPerPerson :50 }

// ];

// let resturant = [
//     {averagePerPerson: 5}
// ]


// const courses = [
//     {id:1, name:"Madan Bhadur"},
//     {id:2, name:"Hari Bhadur"},
// ];

// const course = courses.find(function(course){
//     return course.name === "Hari Bhadur";
// });

// console.log(course);


// const first = [2,4,5,6,8,9,];
// const second = ["Divakar","Zlatan","Beckham", "Borat"];

// const combinedArray = first.concat(second);

// // console.log(first);
// // console.log(second);
// // console.log(combinedArray);

// const slice = combinedArray.slice(3, 7);
// console.log(slice);

// const numbers = [ 1,2,3,5,6,9];

// for (let number of numbers)
//     console.log(number);


// numbers.forEach(function(number) {

//     console.log(number);
// });

// const message = 'This is Manchester United';
// const parts = message.split(" ");

// console.log(message);
// console.log(parts);


// const combined = parts.join("-");
// console.log(combined);




// const courses =[
//     {id:1, name: 'NetBeans'},
//     {id:2, name: 'javaScript'},
// ];


// courses.sort(function(a,b) {

//     const nameA = a.name.toLowerCase();
//     const nameB = b.name.toLowerCase();

//     if ( nameA < nameB) return -1;
//     if ( nameA > nameB) return 1;
//     return 0;

// });

// console.log(courses);

// const numbers = [ 1,3,6,7,-9,23];

// const atLeastOnePositive = numbers.some(function(value) {

//     return value >= 0;
// });


// console.log(atLeastOnePositive);


// const numbers = [ 1,2,-6,9,23,8,-17,14];

// const filteredArray = numbers.filter(function(value) {

//     return value >= 0;
// });

// console.log(filteredArray.sort());

// const sum = numbers.reduce((accumulator, currentValue) => {

//     return accumulator + currentValue;

// }, 0);

// console.log(sum);



// function arrayFromRange (min, max) {
//     const output = [];

//     for ( let i = min; i <= max; i++)
//     output.push(i);
//     return output  ;
// }

// const numbers = arrayFromRange(-23, 23);

// console.log(numbers);



const numbers = [ 1,2,3,4];

function includes (array, searchElement) {

    for (let element of array)
    if(element === searchElement)
    return true;
    return false;
}

const numb = includes(numbers, 23);

console.log(numb);


