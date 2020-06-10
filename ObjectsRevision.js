// Q1 - Create an object called pet with 2 properties. name and age
    let pet = {
        name:"Bappy",
        age : 3
    };

// Q2 - Add an array as a property called owners that lists all the people that live with/own the pet
    pet.owners = ["Divakar", "Zlatan", "Beckham", "Giggsy","Scholes"];
// Q3 - Loop through the owners property and log all the names of owners
    for (let i =0; i <pet.owners.length; i++){
        // console.log(pet.owners[i]);
    }
// Q4 - Create a new object using the new Object syntax.
    let newObject = new Object();
// Q5 - Add a property to the object using the square bracket accessor
    newObject["country"] = "Australia";
// Q6 - Add another property to the object using the dot accessor
    newObject.city = "Sydney";
// Q7 - use a for..in to log all the keys and values in the object declared in Q4

    for (key in newObject){
        console.log(`${key} has a value of ${newObject[key]}`);
    }