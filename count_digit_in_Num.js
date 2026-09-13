// Count the number of digits in a number.

function countDigits(num) {
    if (num === 0) {
        return 1; // Edge case for 0
    }

    let count = 0;
    while (num > 0) {
        count++;
        num = Math.floor(num / 10);
    }
    console.log(`Number of digits in ${num}: ${count}`);
}

countDigits(12345);
countDigits(0);
