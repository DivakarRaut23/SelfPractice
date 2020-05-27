const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
    // Welcome message
    console.log();
    console.log("This is Divakar's Service NSW Help Console !");
    console.log("=============X==============X==================");
    while (true) {
        // List options

        console.log("[1] Demerit Points Check");
        console.log("[2] Registration Calculator");
        console.log("[3] Convert Overseas Licence");
        console.log("[4] Exit Console");
        console.log("=x=x=x=x=x=x=x=x=x==xx=x=x=x=x=x");
        console.log();
       

    
       // Ask user to enter an option
        let userInput = await askQuestion("Select an option from above: ");
        console.log();
        // Choose an option based on user input
        if (userInput == "1") {
            console.log("You have selected to check your demerit point / Licence Status");
            console.log();
            let userInput1 = await askQuestion("Please Select : 1.L/P1 Driver 2. P2 Driver  3. Unrestricted Driver ");
            let userInput2 = await askQuestion("Please Enter your total Demerit Point Lost :");
            console.log();
            let pointsLost = parseInt(userInput2);
            const totalP1Points = 4;
            const totalP2Points = 7;
            const totalUdPoints = 13;
            
            let p1Points = totalP1Points - pointsLost;
            let p2Points = totalP2Points - pointsLost;
            let uDPoints = totalUdPoints - pointsLost;

            if(userInput1 == "1"){
               
                console.log("You have total of" + " "+ totalP1Points + " " + "Demerit points allocation");
                
                if( p1Points <= 0){
                    console.log("Your Licence is Suspended");
                } else {
                    console.log("Points Remaining :" + p1Points);

                }
            } else if(userInput1 == "2"){
                console.log("You have total of" + " "+ totalP2Points + " " + "Demerit points allocation");
                if( p2Points <= 0){
                    console.log("Your Licence is Suspended");
                } else {
                    console.log("Points Remaining :" + p2Points);

                }

            } else if(userInput1 == "3"){
                console.log("You have total of" + " "+ totalUdPoints + " " + "Demerit points allocation");
                if( uDPoints <= 0){
                    console.log("Your Licence is Suspended");
                } else {
                    console.log("Points Remaining :" + uDPoints);

                }
            } else if(userInput1 == "4"){
                break;
            }
        
        
        

        } else if (userInput == "2") {
            console.log("You have selected to Calculate Registration Cost");
            console.log();
            let userInput1 = await askQuestion("Please Select : 1.Private use 2. Business Use  ");
            let userInput2 = await askQuestion("Please Enter Tare Weight [0 - 3564] of your Vehicle :");
            let tareWeight = parseInt(userInput2);
            const regisFee = 67;
            let pUsage = "Private";
            let bUsage = "Business";
            let catA = (tareWeight >= 976 && tareWeight <= 1154); 
            let catB = (tareWeight >= 1155 && tareWeight <= 1504);
            let catC = (tareWeight >= 1505 && tareWeight <= 2504);
            let catD = ( tareWeight >= 2505 && tareWeight <= 2794);
            let catE = ( tareWeight >= 2795 && tareWeight <= 3054);
            let catF = ( tareWeight >= 3055 && tareWeight <= 3304);
            let catG = (tareWeight >= 3305 && tareWeight <= 3564);

            if(userInput1 == "1"){
               
                console.log("Your Vehicle Details [ Registration Usage : " + pUsage +" "+ "Tare Weight : "+ tareWeight + "]");
                
                if( tareWeight <= 975 ){
                    console.log("Your Registration Cost :" + (219 + regisFee));
                } else if (catA) {
                    console.log("Your Registration Cost :" + (254 + regisFee));
                }else if (catB) {
                    console.log("Your Registration Cost :" + (310 + regisFee));
                }else if (catC) {
                    console.log("Your Registration Cost :" + (474 + regisFee));
                }else if (catD) {
                    console.log("Your Registration Cost :" + (688 + regisFee));
                }else if (catE) {
                    console.log("Your Registration Cost :" + (782 + regisFee));
                }else if (catF) {
                    console.log("Your Registration Cost :" + (856 + regisFee));
                }else if (catG) {
                    console.log("Your Registration Cost :" + (932 + regisFee));
                }

            } else if(userInput1 == "2"){
                console.log("Your Vehicle Details [ Registration Usage : " + bUsage +" "+ "Tare Weight : "+ tareWeight + "]");
                
                if( tareWeight <= 975 ){
                    console.log("Your Registration Cost :" + (356 + regisFee));
                } else if (catA) {
                    console.log("Your Registration Cost :" + (405 + regisFee));
                }else if (catB){
                    console.log("Your Registration Cost :" + (490 + regisFee));
                }else if (catC) {
                    console.log("Your Registration Cost :" + (737 + regisFee));
                }else if (catD) {
                    console.log("Your Registration Cost :" + (1146 + regisFee));
                }else if (catE) {
                    console.log("Your Registration Cost :" + (1303 + regisFee));
                }else if ( catF) {
                    console.log("Your Registration Cost :" + (1427 + regisFee));
                }else if (catG) {
                    console.log("Your Registration Cost :" + (1553 + regisFee));
                }

            } else {
                break;
            }
        } else if(userInput == "3") {
            console.log("Welcome to New South Wales. We wish you Wonderful Stay");
            console.log();
            let userInput1 = await askQuestion("Which Country's licence you want to Transfer ?  ");
            let userInput2 = await askQuestion("Please Enter your Age :");
            let userAge = parseInt(userInput2);
            
            let countryA = "austria belgium bosnia herzegovina canada croatia denmark, finland, france, germany, greece, guernsey, ireland, isle, of, Man, italy, japan, jersey, luxembourg, malta, netherlands, new zealand, norway, portugal, singapore, spain, sweden, switzerland, united kingdom, united states of america."
            // let countryA = countryAA.toLowercase();
            let countryB = "bulgaria republic of cyprus czech republic estonia hong kong hungary latvia lithuania poland romania serbia slovakia slovenia south africa south korea republic of korea taiwan"
            // let countryB = countryBB.toLowercase();
                function searchInCountryA(searchTerm){
                    return countryA.includes(searchTerm);
                }

                function searchInCountryB(searchTerm){
                    return countryB.includes(searchTerm);
                }

               
                if (searchInCountryA(userInput1)  ){

                    console.log("Congratulation!, You are Eligible to obtain a Equivalent NSW Car Licence without passing Knowledge and Driving test !");

                } else if ((searchInCountryB(userInput1)) && (userAge >= 25)) {

                    console.log("Congratulation, You are over 25 so you don't have to pass Knowledge and Driving test to get equivalent NSW Car Licence !");

                } else if ((searchInCountryB(userInput1)) && (userAge < 25)) {

                    console.log("You hold licence from Recognised Licensing Authorities but Being under 25 you will need to pass Knowledge and Driving Test!");

                }
                
                else {

                    console.log("You hold licence from Non-Recognised Licensing Authorities : You will need to pass Knowledge and Driving test !")
                }

            

        } else if(userInput == "4") {
            break;
        } else {
            // Error: couldn't read input
            console.log("Error: please enter a number 1 - 4");
        }
        console.log();
    }
    // Goodbye message
    console.log("Thank you for using Divakar's Service NSW Handy Tool !");
}



Program().then(() => {
    process.exit(0);
});

