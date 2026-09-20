// Find the largest element in an array.

function findLargestInArray(arr) {

    if (arr.length === 0) {
        return undefined;
    }

    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    console.log("The largest element in the array is:", largest);
}

findLargestInArray([77,29,7,17,25,4]);