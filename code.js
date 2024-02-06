function divideAndConquerSum(a) {
    function sumHelper(arr, start, end){
        if (start > end) 
             return 0;
        if (start === end)
            return arr[start];
        //Dividing the array into three roughly equal parts
        const segmentLength = end - start + 1;
        const oneThird = start + Math.floor(segmentLength / 3);
        const twoThirds = start + 2 * Math.floor(segmentLength / 3);
    
        //Conquering the array recursively
        const sumFirst = sumHelper(arr, start, oneThird - 1);
        const sumSecond = sumHelper(arr, oneThird, twoThirds - 1);
        const sumThird = sumHelper(arr, twoThirds, end);
    
        //Combining results of the recursive calls
        return sumFirst + sumSecond + sumThird;
        }
        return sumHelper(a, 0, a.length - 1)
}
