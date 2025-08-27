const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let n = +fs.readFileSync(filePath).toString().trim();
let arrN = Array.from({ length: n }, (_, idx) => idx + 1);

function getPermutation(arr, n) {
    let result = [];

    if (n === 1) return arr.map(v => [v]);
    arr.forEach((fixed, fixedIndex, origin) => {
        const rest = [...origin.slice(0, fixedIndex), ...origin.slice(fixedIndex + 1)];
        const sub = getPermutation(rest, n - 1);
        const attached = sub.map(s => [fixed, ...s]);
        result.push(...attached);
    });

    return result;
}

console.log(getPermutation(arrN, n).map(item => item.join(' ')).join('\n'));