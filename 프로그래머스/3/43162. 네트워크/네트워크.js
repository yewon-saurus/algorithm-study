function solution(n, computers) {
    let answer = 0;
    let graph = new Map();
    let needVisit = []; // stack
    let visited = new Array(n).fill(false);
    let focus = 0;
    
    // graph 구성
    computers.forEach((cur, idx) => {
        for (let i = 0; i < n; i++) {
            if (cur[i] === 1) {
                if (graph.get(idx)) {
                    graph.set(idx, [...graph.get(idx), i]);
                }
                else {
                    graph.set(idx, [i]);
                }
            }
        }
    });
    
    while (focus > -1) {
        needVisit.push(...graph.get(focus));
        
        while (needVisit.length > 0) {
            const target = needVisit.pop();
            if (!visited[target]) {
                needVisit.push(...graph.get(target));
                visited[target] = true;
            }
        }
        
        answer++;
        focus = visited.indexOf(false);
    }
    
    return answer;
}