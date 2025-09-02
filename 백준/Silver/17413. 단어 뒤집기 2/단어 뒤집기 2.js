const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let input = fs.readFileSync(filePath).toString().trim();

let stack = [];
let answer = [];

for (const c of input) {
    stack.push(c);
    if (c === " ") {
        if (stack[0] !== "<") {
            stack.pop();
            answer.push([0, stack.join("")]);
            stack = [];
        }
    } else if (c === "<") {
        if (stack.length > 1) {
            stack.pop();
            answer.push([0, stack.join("")]);
            stack = ["<"];
        }
    } else if (c === ">") {
        answer.push([1, stack.join("")]);
        stack = [];
    }
}

if (stack.length > 0) {
    answer.push([0, stack.join("")]);
}

console.log(
    answer
        .map((ele, idx, origin) => {
            if (ele[0]) return ele[1];
            else {
                if (idx + 1 < origin.length && origin[idx + 1][0]) {
                    return ele[1].split("").reverse().join("");
                }
                else {
                    return ele[1].split("").reverse().join("") + " ";
                }
            }
        })
        .join("")
);