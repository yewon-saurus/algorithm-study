const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let [str, M, ...commands] = fs.readFileSync(filePath).toString().trim().split("\n");

let left = str.split('');
let right = [];

for (const command of commands) {
    const [cmd, char] = command.split(' ');
    
    switch (cmd) {
        case 'L':
            if (left.length > 0) {
                right.push(left.pop());
            }
            break;
        case 'D':
            if (right.length > 0) {
                left.push(right.pop());
            }
            break;
        case 'B':
            if (left.length > 0) {
                left.pop();
            }
            break;
        case 'P':
            left.push(char);
            break;
        default:
            break;
    }
}

console.log(left.join('') + right.reverse().join(''));