const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let [N, exp, ...nums] = fs.readFileSync(filePath).toString().trim().split("\n");
nums = nums.map(Number);

const stack = [];

for (const item of exp) {
  const itemCharCode = item.charCodeAt();

  if (item === '+') {
    const [y, x] = [stack.pop(), stack.pop()];
    stack.push(x + y);
  }
  else if (item === '-') {
    const [y, x] = [stack.pop(), stack.pop()];
    stack.push(x - y);
  }
  else if (item === '*') {
    const [y, x] = [stack.pop(), stack.pop()];
    stack.push(x * y);
  }
  else if (item === '/') {
    const [y, x] = [stack.pop(), stack.pop()];
    stack.push(x / y);
  }
  else {
    stack.push(nums[itemCharCode % 65]);
  }
}

console.log(stack[0].toFixed(2));