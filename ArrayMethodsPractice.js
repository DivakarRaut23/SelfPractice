let items = [
    { name: "Bike", price: 200 },
    { name: "Album", price: 15 },
    { name: "Phone", price: 800 },
    { name: "Phone", price: 15 },
    { name: "Computer", price: 1200 },
    { name: "Mouse", price: 23 }
];


// let filteredArray = items.filter(item => item.price >= 200);

// let namesArray = items.map(item => item.name);

// const foundItem = items.find(item => item.name === "Phone");

// console.log(items);
// console.log(filteredArray);
// console.log(namesArray);
// console.log(foundItem);

// items.forEach(item => {
//     if (item.price > 100) { console.log(item.name); }
// })

// const hasItemslessThan100 = items.every(item => item.price <100 );

// console.log(hasItemslessThan100);

// const total = items.reduce((currentTotal, item) => {

//     return item.price +currentTotal
// },0);

// console.log(total);

function byPrice (a, b) {
    return a.price - b.price; 
}

function byName (a, b){
   if(a.name > b.name){
        return 1;
    } else if (b.name > a.name){v 
        return -1;
    } else {
        return 0;
    }

}

console.log(items.sort(byPrice));
console.log(items.sort(byName));