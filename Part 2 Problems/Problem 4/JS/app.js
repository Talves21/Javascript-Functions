const convertCurrency = function(amountUSD, toCurrency = 'EUR') {
    if (toCurrency = 'EUR') {
        let toEur = amountUSD * 0.85;
    } else if (toCurrency = 'GBP') {
        let toGBP = amountUSD * 0.75;
    } else if (toCurrency = 'JPY') {
        let toJPY = amountUSD * 110;
    } else {
        return 'Unsupported Currency'
    }
}
console.log(convertCurrency(100, 'EUR'))
