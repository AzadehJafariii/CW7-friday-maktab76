// Create a function that returns the original value from a matrix with too many sub-arrays.
// Examples
// deNest([[[[[[[[[[[[3]]]]]]]]]]]]) ➞ 3
// deNest([[[[[[[true]]]]]]]) ➞ true

function deNest(array) {
    while (Array.isArray(array)){
        array = [...array][0];
    }
    return array;
}
let arr = [[[[[[[[[[[[3]]]]]]]]]]]]
console.log(deNest(arr));
 


// function originalValue(array) {
//     while (Array.isArray(array)) {
//     array = [...array][0];
//     }
//     return array;
//     }
//     let arr1 = [[[[[[[[[[[[3]]]]]]]]]]]];
//     console.log(originalValue(arr1));