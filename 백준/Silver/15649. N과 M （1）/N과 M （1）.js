const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let [N, M] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let arrN = Array.from({ length: N }, (_, idx) => idx + 1);

function permutation(arr, n) {
    const result = [];

    if (n === 1) return arr.map(v => [v]);
    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const subPermutations = permutation(rest, n - 1);
        const attaced = subPermutations.map(item => [fixed, ...item]);
        result.push(...attaced);
    });
    
    return result;
}

console.log(permutation(arrN, M).map(a => a.join(' ')).join("\n"));