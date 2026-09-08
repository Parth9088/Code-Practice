// Check whether a number is even or odd.

function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log("4 is " + evenOrOdd(4)); // Output: "4 is Even"
console.log("7 is " + evenOrOdd(7)); // Output: "7 is Odd"  