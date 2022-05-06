

// Use destructuring assignment with the rest parameter sub-array 
// of the original array source with the first two elements omitted:


function subArray(array){
    let [, , ...rest] = array;
    return rest;
}
let arr = [1, 2, 3, 4, 5, 6];
console.log(subArray(arr));
