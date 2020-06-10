// Q1 Create a switch statement that is passed in the day of the week. For each of the below cases, print out to the console a value




// Saturday - "Ahh, I can finally relax"
// Sunday - "Ah well, the weekend is nearly over"
// Thursday/Friday - "Yay, it's almost the weekend"
// default - "Time for work then..."



// Q2 Convert the above switch statement into an if statement







let myDay = "saturday";

// switch (myDay) {
//     case "saturday":
//         console.log("Ahh, I can finally relax");
//         break;
//     case "sunday":
//         console.log("Ah well, the weekend is nearly over");
//         break;
//     case "thursday":
//     case "friday":   
//         console.log("Yay,It's almost the weekend");
//         break;
//     default:
//         console.log("Time for work then");
//         break;
//     }

if (myDay == "saturday") {
    console.log("Ahh, I can finally relax");
}
else if (myDay == "sunday") {
    console.log("Ah well, the weekend is nearly over");
}
else if ((myDay == "thursday") || (myDay == "friday")) {
    console.log("Yay,It's almost the weekend");
}
else {
    console.log("Time for work then");

}

