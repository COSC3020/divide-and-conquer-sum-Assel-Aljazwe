function divideAndConquerSum(a) {
    if (a.length <= 1) {
        return a.length === 1 ? a[0] : 0;
    }
    //Dividing the array into three roughly equal parts
    const oneThird = Math.ceil(a.length / 3);
    const twoThirds = Math.ceil(2 * a.length / 3);

    const first = a.slice(0, oneThird);|
    const second = a.slice(oneThird, twoThirds);
    const third = a.slice(twoThirds);

    //Conquering the array recursively
    const sumFirst = divideAndConquerSum(first);
    const sumSecond = divideAndConquerSum(second);
    const sumThird = divideAndConquerSum(third);

    //Combining results of the recursive calls
    return sumFirst + sumSecond + sumThird;
}
