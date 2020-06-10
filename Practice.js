// Create an object called shop. It should have 3 properties - address, name and category (set these properties to whichever values you would like). Convert the object to a JSON string and output the string to the console.

let shop = {
    adress : "Sydney",
    name : "Mcdonalds",
    category : "Restaurant"
}

let shopJSON = JSON.stringify(shop);

console.log(shopJSON);