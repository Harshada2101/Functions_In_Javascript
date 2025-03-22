// split and join, reverse
let str = "Hello World";
let words = str.split(" ");  
console.log(words);

let joinedStr = words.join("-"); 
console.log(joinedStr);

let reversedStr = str.split("").reverse().join(""); 
console.log(reversedStr); // Output: "dlroW olleH"