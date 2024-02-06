function divideAndConquerSum(a) {
    // Creating a recursive helper function to compute sum
    function recursiveSum(arr, leftIndex, rightIndex) {
        // Base case: If the array is empty
        if (leftIndex > rightIndex) {
            return 0;
        }

        // Base case: If the array has one element
        if (leftIndex === rightIndex) {
            return arr[leftIndex];
        }

        // Calculate the dividing points, ensuring they are distinct and cover the array evenly
        const range = rightIndex - leftIndex;
        const split1 = leftIndex + Math.floor(range / 3);
        const split2 = leftIndex + 2 * Math.floor(range / 3) + 1;

        // Ensure the splits are valid and adjust if necessary to avoid infinite recursion
        // This is especially important for small arrays or when the splits do not divide the array well
        const validSplit1 = split1 > leftIndex ? split1 : leftIndex + 1;
        const validSplit2 = split2 > validSplit1 ? split2 : validSplit1 + 1;

        // Recursively sum the three parts of the array
        const sumFirstPart = recursiveSum(arr, leftIndex, validSplit1 - 1);
        const sumSecondPart = recursiveSum(arr, validSplit1, validSplit2 - 1);
        const sumThirdPart = recursiveSum(arr, validSplit2, rightIndex);

        // Combine the sums of the three parts and return
        return sumFirstPart + sumSecondPart + sumThirdPart;
    }

    // Call the recursive helper function with the entire array
    return recursiveSum(a, 0, a.length - 1);
}
