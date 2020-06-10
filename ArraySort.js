// let numbers = [7, 9,23, 18, 49, 56];


// function compareNumbers (num1,num2){
//     return num2 - num1;
// }

// console.log(numbers.sort(compareNumbers));




// Q2 - Create a sort function that will sort the following array of events into chronological order:


let events = [
    {
        name: "Went on holiday",
        month: 3,
        year: 2019
    }, {
        name: "Got first car",
        month: 5,
        year: 2015
    }, {
        name: "Moved out of home",
        month: 11,
        year: 2019
    }
];

let chronologicalOrder=events
.sort((event1,event2)=>event1.month-event2.month)
.sort((event1,event2)=>event1.year-event2.year)
// console.log(chronologicalOrder);




// Q3 - Sort the following array in alphabetical order by last name, then by first name
let people = [
    {
        firstName: "Margaret",
        lastName: "Cox"
    }, {
        firstName: "Aaryan",
        lastName: "Bauer"
    }, {
        firstName: "Asma",
        lastName: "Bauer"
    }, {
        firstName: "Jazmin",
        lastName: "Flowers"
    }
];

function byLastName(p1,p2){
    let person1=p1.lastName.toLowerCase();
    let person2=p2.lastName.toLowerCase();
    if(person1<person2){
        return -1;
        if(person1>person2){
            return 1;
        } 
       
        return 0;
      }}
      function byFirstName(p1,p2){
        let person1=p1.firstName.toLowerCase();
        let person2=p2.firstName.toLowerCase();
        if(person1<person2){
            return -1;
            if(person1>person2){
                return 1;
            }  
            return 0;
          }}
        
    let namesSorted=people
    .sort(byLastName)
    .sort(byFirstName);
    console.log(namesSorted);