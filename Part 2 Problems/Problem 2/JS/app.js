// Using a For Loop

// function sumArray(nums) {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//     }
//     return sum;
// }

// let numbers = [4, 7, 12, 76, 43];
// let total = sumArray(numbers);
// console.log(total);

// Using Function Expression
const sumArray = function(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
}
let sum = sumArray(4, 7, 12, 76, 43);
console.log(sum);

