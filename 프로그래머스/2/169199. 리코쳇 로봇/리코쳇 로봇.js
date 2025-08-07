const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];

function solution(board) {
    const [n, m] = [board.length, board[0].length];
    let visited = Array.from({ length: n }, (_) => new Array(m).fill(false));
    let queue = [];
    let cur = null;
    
    // R 찾기
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 'R') {
                cur = [i, j];
                visited[i][j] = true;
                queue.push([i, j, 0]); // x, y, dist
                break;
            }
        }
    }
    
    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();
        visited[x][y] = true;
        
        if (board[x][y] === 'G') {
            return dist;
        }
        
        for (const [dx, dy] of dir) {
            // 미끄러져서 도달한 곳 찾기
            let [curX, curY] = [x, y];

            while (
                (curX + dx >= 0 && curX + dx < n) &&
                (curY + dy >= 0 && curY + dy < m) &&
                board[curX + dx][curY + dy] !== 'D'
            ) {
                curX += dx;
                curY += dy;
            }

            if (!visited[curX][curY]) {
                visited[curX][curY] = true;
                queue.push([curX, curY, dist + 1]);
            }
        }
    }
    
    return -1;
}