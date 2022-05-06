// In this challenge, you have to implement a function that returns the given
//  distance kilometers converted into miles. You have to round the result up to the fifth decimal digit.
// Examples
// kmtomiles(2) ➞ 1.24274
// kmtomiles(6) ➞ 3.72823
// kmtomiles(8) ➞ 4.97097

function kmtomiles(num){
    return num*0.62137
}
console.log(kmtomiles(2));
console.log(kmtomiles(6));
console.log(kmtomiles(8));