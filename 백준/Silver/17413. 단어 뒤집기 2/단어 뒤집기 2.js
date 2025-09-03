const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let input = fs.readFileSync(filePath).toString().trim();

let regExp = /<[a-z\s]+>|[a-z0-9]+/g;

console.log(
    input.replace(regExp, (word) => {
        return word.startsWith("<") ? word : word.split("").reverse().join("");
    })
);