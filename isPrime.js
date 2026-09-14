// Write a function to check prime number.

function isPrime(num) {
    if (num <= 1) {
        console.log(num + " is not a prime number.");
        return false; // Numbers less than or equal to 1 are not prime
    }           
    for (let i = 2; i <= Math.sqrt(num); i++) { 
        if (num % i === 0) {
            console.log(num + " is not a prime number.");
            return false; // Found a divisor, not prime
        }
    }
    console.log(num + " is a prime number.");
    return true;
}


isPrime(30); // Output: 30 is not a prime number.
isPrime(17); // Output: 17 is a prime number.
