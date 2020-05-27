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
    let input = await askQuestion("Which city do you want the current Exchange rate for : ")
    let amountString = await askQuestion("How much money do you want to exchange ? : ")
    let amount = parseFloat(amountString);
   
    let web = await axios.get(`https://api.exchangeratesapi.io/latest?base=AUD`);
    

  let dataWeb = web.data.rates ;


for(key in dataWeb){

    if(dataWeb.hasOwnProperty(input)){
        let value =dataWeb[input];
        myrate = value;
       
    }

    }

let exchange = amount * myrate;
console.log(exchange);

}

Program().then(() => {
    process.exit(0);
    });