// Find the sum of elements in an array.

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
console.log("The sum of the array elements is:", sum);
}

sumArray([1, 2, 3, 4, 5]);
