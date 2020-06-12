// Create an array called pets with the following properties: name, age, species, id, ownerId

let pets = [
    {
        name: "Kublya",
        age: 3,
        species: "Totrise",
        id: "9b16e8ba-6cd3-41d0-98bf-325ec6621a27",
        ownerId: "177418cc-086b-4bfd-a51e-3cec52835183"
    },
    {
        name: "Zintak",
        age: 7,
        species: "Camel",
        id: "e4ac20fa-756f-40d5-abb9-fa6f3cde5dd0",
        ownerId: "0dea1b7f-3fa3-4fcf-a8dd-743a07508432"
    },
    {
        name: "Anantak",
        age: 7,
        species: "Horse",
        id: "f7a9c545-38b9-484d-8d21-9a309cd4e768",
        ownerId: "f25ba6c0-81b5-4d50-b54d-29c37256ba4a"
    },
    {
        name: "Gobli",
        age: 9,
        species: "Dog",
        id: "22efba64-2575-4ab9-8450-6397fa46bdd7",
        ownerId: "f25ba6c0-81b5-4d50-b54d-29c37256ba4a"
    }

];
// Create an array called owners with the following properties: firstName, lastName, id

let owners = [
    {
        firstName: "Divakar",
        lastName: "Raut",
        id: "f25ba6c0-81b5-4d50-b54d-29c37256ba4a"
    }, {
        firstName: "David",
        lastName: "Beckham",
        id: "0dea1b7f-3fa3-4fcf-a8dd-743a07508432"
    }, {
        firstName: "Zlatan",
        lastName: "Ibrahimovic",
        id: "177418cc-086b-4bfd-a51e-3cec52835183"
    }
];



// Q1 - Write a function that returns a pet given its id

function getPet(id) {
    function getPetById(pet) {
        return pet.id == id;
    }
    return pets.find(getPetById);

}

let myPet = getPet("f7a9c545-38b9-484d-8d21-9a309cd4e768");
// console.log(`${myPet.name} is the pet you were looking for`);


// Q2 - Write a function that returns an owner given its id
function getOwner(id) {
    function getOwnerById(owner) {
        return owner.id == id;
    }
    return owners.find(getOwnerById);
}

let myOwner = getOwner("f25ba6c0-81b5-4d50-b54d-29c37256ba4a");
// console.log(`${myOwner.firstName} ${myOwner.lastName} is the owner you were looking for`);


// Q3 - Write a function that returns the all the pets for an owner

function getPet (id){
    function getPetByOwnerId(pet){
        return pet.ownerId == id; 
    }
    return pets.filter(getPetByOwnerId);

}

// let petOwner = getPet("f25ba6c0-81b5-4d50-b54d-29c37256ba4a");
// console.log(petOwner);

// Q4 - Write a function that returns the number of pets for each owner: return array should be an object with property ownerId and numberOfPets


function getPetCountByOwner() {
    function getPetForOwner(owner) {
        if (pet.ownerId == id) {
            return {
                ownerId: pet.ownerId,
                numberOfPets: getPetByOwnerId(owner.id).length
            };

        }
        return pets.map(getPetByOwnerId);

    }
}

    let petOwner = getPetCountByOwner();
    console.log(petOwner);

    // Q5 - Write a function that returns all the names of the pets in order of their owner's last name



    // function bylastName(pet1, pet2) {

    //     let owner1 = getOwner(pet1.ownerId);
    //     let owner2 = getOwner(pet2.ownerId);

    //     if (owner1.lastName > owner2.lastName) {
    //         return 1;
    //     } else if (owner2.lastName > owner1.lastName) {
    //         return -1;
    //     } else {
    //         return 0;
    //     }

    // }

    // console.log(pets.sort(bylastName));
