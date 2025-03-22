//Array Destructuring
const hello = () => {
    console.log('hi');
    return 20;
};
const [b, a] = [10, hello()];
console.log(b); // Output: 10