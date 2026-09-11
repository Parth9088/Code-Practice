// Find the factorial of a number using a loop.

function factorial(n) {
    if (n < 0) {
        return "Factorial is not a Zero or negative numbers.";
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }   
    return result;
}   

console.log("Factorial of 7 is:", factorial(7)); 
// Output: 5040 