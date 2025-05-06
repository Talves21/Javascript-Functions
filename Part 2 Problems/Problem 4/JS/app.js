const convertCurrency = function(amountUSD, toCurrency ='EUR') {
    if (toCurrency == 'EUR') {
        return amountUSD * 0.85;
    } else if (toCurrency == 'GBP') {
        return amountUSD * 0.75;
    } else if (toCurrency == 'JPY') {
        return amountUSD * 110;
    } else {
        return 'Unsupported Currency'
    }
}
console.log(convertCurrency(Number(prompt('Enter amount here')), prompt('Enter currency here')));
