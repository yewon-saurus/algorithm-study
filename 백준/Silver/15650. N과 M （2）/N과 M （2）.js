const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let [N, M] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let arrN = Array.from({ length: N }, (_, idx) => idx + 1);

function combination(arr, n) {
    let result = [];

    if (n === 1) return arr.map(v => [v]);
    arr.forEach((fixed, fixedIndex) => {
        const rest = arr.slice(fixedIndex + 1);
        const sub = combination(rest, n - 1);
        const attached = sub.map(item => [fixed, ...item]);
        result.push(...attached);
    })

    return result;
}

console.log(combination(arrN, M).map(c => c.join(' ')).join('\n'));