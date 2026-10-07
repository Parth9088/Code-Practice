// Find the second largest number in an array.

function secondLargest(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements to find the second largest
    }

    let largest = arr[0];
    let secondLargest = arr[1];

    if (secondLargest > largest) {
        [largest, secondLargest] = [secondLargest, largest];
    }

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

console.log(secondLargest([17, 28, 35, 28, 40, 1, 5, 5])); 

