// User will enter in which country they want
// convert to AUD from EU
//User will enter in how much money they have in AUD and what it will equate to
//User will enter in how much money they have in ___ and what it will equate to in AUD
const axios = require("axios");
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
    // Your Code Here...
    countries = [
        {
            code: "CAD",
            countryName: "Canadian Dollars"
        },
        {
            code: "HSK",
            countryName: "Hong Kong Dollar"
        },
        {
            code: "ISK",
            countryName: "Icelandic Krona"
        },
        {
            code: "PHP",
            countryName: "Philippine Peso"
        },
        {
            code: "DKK",
            countryName: "Danish Krone"
        },
        {
            code: "HUF",
            countryName: "Hungarian Forint"
        },
        {
            code: "CZK",
            countryName: "Czech Krouna"
        },
        {
            code: "GBP",
            countryName: "Great Brittish Pounds"
        },
        {
            code: "RON",
            countryName: "Romanian Leu"
        },
        {
            code: "SEK",
            countryName: "Swedish Krona"
        },
        {
            code: "IDR",
            countryName: "Indonesian Rupiah"
        },
        {
            code: "INR",
            countryName: "Indian Rupee"
        },
        {
            code: "BRL",
            countryName: "Brazilian Real"
        },
        {
            code: "RUB",
            countryName: "Russian Ruble"
        },
        {
            code: "HRK",
            countryName: "Croatian Kuna"
        },
        {
            code: "JPY",
            countryName: "Japanese Yen"
        },
        {
            code: "THB",
            countryName: "Thai Baht"
        },
        {
            code: "CHF",
            countryName: "Swiss Franc"
        },
        {
            code: "EUR",
            countryName: "European Euro"
        },
        {
            code: "MYR",
            countryName: "Malaysian Ringgit"
        },
        {
            code: "BGN",
            countryName: "Bulgarian Lev"
        },
        {
            code: "TRY",
            countryName: "Turkish Lira"
        },
        {
            code: "CNY",
            countryName: "Chinese Renminbi"
        },
        {
            code: "NOK",
            countryName: "Norway Krone"
        },
        {
            code: "NZD",
            countryName: "New Zealand Dollar"
        },
        {
            code: "ZAR",
            countryName: "South Affrican Rand"
        },
        {
            code: "USD",
            countryName: "United States Dollar"
        },
        {
            code: "MXN",
            countryName: "Mexican Peso"
        },
        {
            code: "SGD",
            countryName: "Singapore Dollar"
        },
        {
            code: "AUD",
            countryName: "Australian Dollar"
        },
        {
            code: "ILS",
            countryName: "Israli Shekel"
        },
        {
            code: "KRW",
            countryName: "South Korean Won"
        },
        {
            code: "PLN",
            countryName: "Poland Zloty"
        },
    ]
    console.table(`The codes we offer are ${listCountryCodesOnly(countries)}`);    // print out a list of country codes
    let base = await askQuestion("Which Country do you want to convert from (enter in 3 letter currency code): ");
    let baseForWebsite = base.toUpperCase();
    //validCode(baseForWebsite, countries);
    console.log(`The code you entered ${baseForWebsite} stands for ${countryName(base, countries)}`);    //you have selected __ which stands for __
    console.table(`The codes we offer are ${listCountryCodesOnly(countries)}`);     //print out a list of country codes
    let country = await askQuestion("Which Country do you want to convert to (enter in 3 letter currency code): ");
    let countryForWebsite = country.toUpperCase();
    console.log(`The code you entered ${countryForWebsite} stands for ${countryName(country, countries)}`)    //you have selected __ which stands for
    let website = await axios.get(`https://api.exchangeratesapi.io/latest?base=${baseForWebsite}&symbol=${countryForWebsite}`);
    let amountString = await askQuestion("How much money would you like to convert: $");
    let amount = parseFloat(amountString);
    console.log();
    let detailedResponse = website.data.rates;
    console.log(`$${amount} in ${base.toUpperCase()} equals $${Math.round(calculateRate(detailedResponse, country.toUpperCase(), amount))} in ${country.toUpperCase()}`);
    console.log();
}

// convert country codes into an array of just codes
function listCountryCodesOnly(countries) {
   return countries.map(countryObject => countryObject.code)
}



//when a country code is selected, display the corresponding country name
function countryName(userInput, countries) {
    let newCountries = countries.find(countryObject => userInput.toUpperCase() == countryObject.code)
    return newCountries.countryName;
}

//Was the data entered a valid code
function validCode(userInput, countries) {
    if (listCountryCodesOnly(countries).includes(userInput) === false){
        console.log("Sorry, the input provided is not one that we can convert")
    }

}


function calculateRate(detailedResponse, country, amount) {
    for (key in detailedResponse) {
        if (detailedResponse.hasOwnProperty(country)) {
            let value = detailedResponse[country];
            myRate = value;
        }
    }
    return myRate * amount;
}

Program().then(() => {
    process.exit(0);
});