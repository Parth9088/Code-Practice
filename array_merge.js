// Merge two arrays and remove duplicates.

function mergeAndRemoveDuplicates(arr1, arr2) {
    const result = [];
    const seen = {};

    // Add elements - first array
    for (let i = 0; i < arr1.length; i++) {
        if (seen[arr1[i]] !== true) {
            seen[arr1[i]] = true;
            result[result.length] = arr1[i];
        }
    }

    // Add elements - second array
    for (let i = 0; i < arr2.length; i++) {
        if (seen[arr2[i]] !== true) {
            seen[arr2[i]] = true;
            result[result.length] = arr2[i];
        }
    }

    return result;
}

console.log(
    mergeAndRemoveDuplicates([1, 2, 3, 4], [3, 4, 5, 6])
);
