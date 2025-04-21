const delta = [[1, 0], [0, 1], [-1, 0], [0, -1]];

function solution(maps) {
    let queue = [];
    queue.push([0, 0, 1]); // x, y, distance
    
    while (queue.length > 0) {
        const [x, y, distance] = queue.shift();
        
        for (const [dx, dy] of delta) {
            if (
                x + dx >= 0 && x + dx < maps.length &&
                y + dy >= 0 && y + dy < maps[0].length &&
                maps[x + dx][y + dy] === 1
            ) {
                maps[x + dx][y + dy] = distance + 1;
                queue.push([x + dx, y + dy, maps[x + dx][y + dy]]);
            }
        }
    }
    
    return maps[maps.length - 1][maps[0].length - 1] <= 1 ? -1 : maps[maps.length - 1][maps[0].length - 1];
}