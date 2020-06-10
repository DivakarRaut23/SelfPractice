const readline = require('readline');
const axios = require("axios");



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
    // let input = await askQuestion("Which city do you want the current Exchange rate for : ")
    // let amountString = await askQuestion("How much money do you want to exchange ? : ")
    // let amount = parseFloat(amountString);
   
    let web = await axios.get(`http://api.football-data.org/v2/competitions`);
    // let competitions = web.data.competitions;
    
    premierLeague = web.data.competitions;
    // let info = premierLeague.includes("2072");
    console.log(premierLeague);

// console.log(web.data[id].);
// console.log(premierLeague);

}

Program().then(() => {
    process.exit(0);
    });