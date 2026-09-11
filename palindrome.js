// Check whether a number is a palindrome.

function isPalindrome(num) {
    let reversed = 0;
    let originalNum = num;  

    while (num > 0) {
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num / 10);
    }

    const result = originalNum === reversed;
    console.log(`Number ${originalNum} is palindrome: ${result}`);
    return result;
}

isPalindrome(12321);
isPalindrome(12345);