const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let input = fs.readFileSync(filePath).toString().trim();
let [N, M, ...link] = input.split("\n");
link = link.map(li => li.split(" ").map(Number));

let graph = new Map();

for (const [from, to] of link) {
  const [neigh, bor] = [graph.get(from) || [], graph.get(to) || []];
  neigh.push(to);
  bor.push(from);
  graph.set(from, neigh);
  graph.set(to, bor);
}

let visited = new Array(+N + 1).fill(-1);
let queue = [];

visited[1] = 0;
queue.push(1);

while (queue.length) {
  const cur = queue.shift();
  const needVisit = graph.get(cur) || [];

  for (const next of needVisit) {
    if (visited[next] === -1) {
      visited[next] = visited[cur] + 1;
      queue.push(next);
    }
  }
}

console.log(visited.slice(1).filter(vi => vi > -1).length - 1);