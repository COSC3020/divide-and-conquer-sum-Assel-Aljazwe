function divideAndConquerSum(a) {
    
    function recursiveSum(arr, leftIndex, rightIndex) {
        
        if (leftIndex > rightIndex) {
            return 0;
        }
   
        if (leftIndex === rightIndex) {
            return arr[leftIndex];
        }
        
        const range = rightIndex - leftIndex;
        const split1 = leftIndex + Math.floor(range / 3);
        const split2 = leftIndex + 2 * Math.floor(range / 3) + 1;

        
        const validSplit1 = split1 > leftIndex ? split1 : leftIndex + 1;
        const validSplit2 = split2 > validSplit1 ? split2 : validSplit1 + 1;

        
        const sumFirstPart = recursiveSum(arr, leftIndex, validSplit1 - 1);
        const sumSecondPart = recursiveSum(arr, validSplit1, validSplit2 - 1);
        const sumThirdPart = recursiveSum(arr, validSplit2, rightIndex);

        
        return sumFirstPart + sumSecondPart + sumThirdPart;
    }

    
    return recursiveSum(a, 0, a.length - 1);
}
