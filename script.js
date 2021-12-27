/* Declare currency ratio */
let currencyRatio = {
    USD:{
        KRW: 1187.02,
        USD: 1,
        CAD: 1.28,
        unit: "Dollar"
    },
    KRW:{
        KRW: 1,
        USD: 0.00084,
        CAD: 0.0011,
        unit: "Won"
    },
    CAD:{
        KRW: 926.53,
        USD: 0.78,
        CAD: 1,
        unit: "Dollar"
    }
}

/* Declaration variables */
let fromCurrency = "USD";
let toCurrency = "USD";

/* Test to call unit in each currency*/
// console.log(currencyRatio.USD.unit);
// console.log(currencyRatio["KRW"].unit)
// console.log(currencyRatio["USD"]["unit"])

/* Selecting currency and changing unit in from-box*/
document.querySelectorAll("#from-currency-list a")
        .forEach(menu=>menu.addEventListener("click", function() {
            // Receive button value and change button value
            document.getElementById("from-button").textContent = this.textContent;
            // Change the variable with sellected value
            fromCurrency = this.textContent;
            document.getElementById("from-unit").textContent = currencyRatio[fromCurrency].unit;
            convert();
        }));
/* Selecting currency and changing unit in to-box*/
document.querySelectorAll("#to-currency-list a")
        .forEach(menu=>menu.addEventListener("click", function() {
            // Receive button value and change button value
            document.getElementById("to-button").textContent = this.textContent;
            // Change the variable with sellected value
            toCurrency = this.textContent;
            document.getElementById("to-unit").textContent = currencyRatio[toCurrency].unit;
            convert();
        }));

/* The exchanged currency shows when user inputs the value */
function convert() {
    let amount = 0;
    let convertedAmount = 0;
 
        // Receive amount to exchange
        amount = document.getElementById("from-input").value;
        // Call exchange ratio
        convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
        // Display the exchanged value on the other prompt
        document.getElementById("to-input").value = Math.round(convertedAmount*100)/100;
}

