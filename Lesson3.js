// let openTime = 17;
// let closeTime = 22;
// let currentTime = 21;
// let isMonday = true;

// if ((currentTime >= openTime && currentTime <= closeTime) && !isMonday){
//     console.log("We are open for Business!" )
// } else {
//     console.log("Sorry, This Restuarant is Closed!");
// }

// let club1= "Manchester United";
// let club2 = " Not Chelsea";
// let club3 = "Not Arsenal";
// let club4 = " GGMU";

// let bestClub = club1 || club2 || club3 || club4 || "Red Devils" ;

// console.log(bestClub);

// let myFavouriteResturant = "True Blue Dine In";

// if (!myFavouriteResturant){
//     myFavouriteResturant = "Last bus to Kathmandu";
// }

// console.log(myFavouriteResturant);




for (let i= 1; i<= 100; i++){
   if ( (i % 3 == 0) && (i % 5 == 0)){
    console.log("FizzBuzz");
   } else if (i % 3 == 0){
       console.log("Fizz");
   } else if ( i % 5 == 0){
       console.log("Buzz");
   } else {
       console.log(i);
   }
    
}

