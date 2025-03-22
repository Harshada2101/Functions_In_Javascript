// splice
numbers = [1,2,3,4,5,6,7]
let newNumbers = [...numbers]; 
newNumbers.splice(1, 2, 99);
console.log(newNumbers); // Output: [1, 99, 4]