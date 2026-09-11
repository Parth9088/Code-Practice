// Reverse a given number.

function reverseNum(num) {
    let reversed = 0;
    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }  
    return reversed;
}

console.log(reverseNum(12345)); // Output: 54321

