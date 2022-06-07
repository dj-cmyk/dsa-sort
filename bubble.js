function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

module.exports = bubbleSort;


// Loop with i from end of array towards beginning
// Loop with j from the beginning until i - 1
// If arr[j] is greater than arr[j+1], swap those two values!
// Return the sorted array
