// To implement merge sort, we first need a helper function
// This helper should take in two sorted arrays, and return a new array with all elements in sort order
// Should run in O(n + m) time/space and be pure

// Create empty out array
// Start pointers at beginnings of arrays a and b
// If a value <= b value, push a value to out & increase a pointer
// Else, push b value to out & increase b pointer
// Once we exhaust one array, push all remaining values from other array
function merge(arr1, arr2) {
    let returnArr = [];
    let arr1Pointer = 0;
    let arr2Pointer = 0;

    while (arr1Pointer < arr1.length && arr2Pointer < arr2.length) {
        if (arr1[arr1Pointer] < arr2[arr2Pointer]) {
            returnArr.push(arr1[arr1Pointer]);
            arr1Pointer++;
        } else {
            returnArr.push(arr2[arr2Pointer]);
            arr2Pointer++;
        }
    }

    while (arr1Pointer < arr1.length) {
        returnArr.push(arr1[arr1Pointer])
        arr1Pointer++
    }
    while (arr2Pointer < arr2.length) {
        returnArr.push(arr2[arr2Pointer]);
        arr2Pointer++
    }

    return returnArr;
}



// Recursively:
// Split array into halves until you have arrays that have length of 0 or 1
// Merge split arrays and return the merged & sorted array

function mergeSort(arr) {
    // base case
    if (arr.length <= 1) return arr;

    // divide array 
    let midPoint = Math.floor(arr.length/2)

    // recursion calls - keep dividing until base case is reached
    let left = mergeSort(arr.slice(0, midPoint))
    let right = mergeSort(arr.slice(midPoint))

    // final process - use helper function to merge right and left arrays
    return merge(left, right);
}

module.exports = { merge, mergeSort};