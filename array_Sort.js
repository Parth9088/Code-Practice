// Sort an array without using sort().

function sortArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log("Sorted Array : ("+sortArray([5, 2, 9, 1, 7])+")");
// [1, 2, 5, 7, 9]

//---------------------------------------------------------------//

// Sort an array using sort().

function sort_Array(arr) {
    return arr.sort((a, b) => a - b);
}

let numbers = [2,8,10,6,4];

console.log("Sorted Array : (" +sort_Array(numbers)+")");
// [1, 2, 5, 7, 9]
