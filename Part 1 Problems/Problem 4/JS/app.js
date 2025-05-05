const allStats = function(num1, num2 , num3 , num4 , num5) {
    return {
        count: allStats.length,
        sum: num1 + num2 + num3 + num4 + num5,
        min: num4,
        max: num5,
        average: (num1 + num2 + num3 + num4 + num5) / 5
    }
}
let totalStats = allStats(3, 7, 10, 2, 20);
console.log(totalStats);
