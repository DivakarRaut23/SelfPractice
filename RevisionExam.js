//Question no 23



// let companies = ["ServiceNSW","Woolworths","BestITEngineering","Mcdonalds"];
// let workPlacenames = companies.map(n => {   // i get confused when mapping a object from a array.
//     return { companyName : n};

// });

// console.log(workPlacenames);

// Question no 24

let friends = [
    {
        firstName:"Azamat",
        lastName:"Bhagatov"
    },
    {
        firstName:"Zlatan",
        lastName:"Ibrahimovic"
    },
    {
        firstName:"David",
        lastName:"Beckham"
    },
    {
        firstName:"Borat",
        lastName:"Sachadev"
    }
]

 function fullName(friends){
    let fullName = [];
    for (let i= 0; i < friends.length; i++){
        let friendfullName = `${friends[i].firstName} ${friends[i].lastName}` ;
        fullName.push(friendfullName);
    }
    return fullName;
}

console.log(fullName(friends));
