const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let [N, M] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let arrN = Array.from({ length: N }, (_, idx) => idx + 1);

function dupCombination(arr, n) {
    let result = [];

    if (n === 1) return arr.map(v => [v]);
    arr.forEach((fixed) => {
        const sub = dupCombination(arr, n - 1);
        const attached = sub.map(s => [fixed, ...s]);;
        result.push(...attached);
    });

    return result;
}

console.log(dupCombination(arrN, M).map(c => c.join(' ')).join('\n'));