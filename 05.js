// Create a function based on the input and output. Look at the examples, there is a pattern.
// Examples
// secret("div*2") ➞ "<div></div><div></div>"
// secret("p*1") ➞ "<p></p>"
// secret("li*3") ➞ "<li></li><li></li><li></li>"

function secret(str){
    let temp = str.split("*");
  return `"<${temp[0]}></${temp[0]}>"`.repeat(+temp[1]);
  
}
console.log(secret("div*2"));
