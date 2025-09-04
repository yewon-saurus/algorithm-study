const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let [N, K] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let visited = new Array(100001).fill(0);
let queue = [];
queue.push(N);

while (queue.length > 0) {
  const cur = queue.shift();

  if (cur === K) {
    console.log(visited[cur]);
    break;
  }

  for (let next of [cur - 1, cur + 1, cur * 2]) {
    if (!visited[next] && next >= 0 && next < 100001) {
      visited[next] = visited[cur] + 1;
      queue.push(next);
    }
  }
}