// Set Method
// function mergeUnique(arr1, arr2) {
//     let combineArr = [...new Set([...arr1, ...arr2])];
//     return combineArr;
// }

// console.log(mergeUnique([1, 2, 3], [2, 3, 4]));

// Using loops to merge arrays
function mergeUnique(arr1, arr2) {
    let combineArr = [...arr1];
    for  (i = 0; i < combineArr.length; i++) {
        if (combineArr.indexOf(arr2[i]) === -1) {
            combineArr.push(arr2[i]);
        }
    }
    return combineArr;
}
console.log(mergeUnique([1, 2, 3], [2, 3, 4]));
