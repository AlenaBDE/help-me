module.exports = function count(s, pairs) {
    let answer = 1,
        count = 1,
        last = s[0],
        N = 1,
        minElement = pairs[0][0],
        maxElement = pairs[0][0],
        maxRowOnes = 0,
        maxRowZeros = 0,
        rowZeros = 0,
        rowOnes = 0;
    const reducedPairs = [];
    pairs.forEach((item, i) => {
        let base = Math.ceil(Math.log(1000000007) / Math.log(item[0]));
        let newPow = item[1] % base;
        reducedPairs.push([item[0], newPow]);
        if (item[0] < minElement) minElement = item[0];
        else if (item > maxElement) maxElement = item[0];
    });

    for (let j = 0, length = s.length; j < length; j++){
        if (s[j] === '0') {
            rowZeros++;
            rowOnes = 0;
            if (rowZeros > maxRowZeros) maxRowZeros = rowZeros;
        } else {
            rowOnes++;
            rowZeros = 0;
            if (rowOnes > maxRowOnes) maxRowOnes = rowOnes;
        }
    }
    if (maxRowOnes > minElement) return 0;

    reducedPairs.forEach(item => {
        count *= (1 - 1 / item[0]);
        N *= Math.pow(item[0], item[1]);
    });
    if (s[0] === '0') answer -= count;
    else answer = count;

    answer = Math.round(answer * N);


    const result = answer % 1000000007;
    return result;
}
