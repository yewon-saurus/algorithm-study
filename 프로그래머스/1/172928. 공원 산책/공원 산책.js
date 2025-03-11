const news = {
    N: [0, -1],
    E: [1, 0],
    W: [-1, 0],
    S: [0, 1],
}

function solution(park, routes) {
    park = [...park].map(ele => ele.split(''));
    let dogX, dogY;
    
    for (let y = 0; y < park.length; y++) {
        for (let x = 0; x < park[0].length; x++) {
            if (park[y][x] === 'S') {
                [dogX, dogY] = [x, y];
                break;
            }
        }
    }
    
    for (const ele of routes) {
        const [where, howMuch] = ele.split(' ');
        const [dx, dy] = news[where];
        let obsFlag = false;
        
        if (
            dogY + dy * howMuch < 0 || dogY + dy * howMuch >= park.length ||
            dogX + dx * howMuch < 0 || dogX + dx * howMuch >= park[0].length
        ) continue;
        
        for (let i = 1; i <= howMuch; i++) {
            if (park[dogY + dy * i][dogX + dx * i] === 'X') {
                obsFlag = true;
            }
        }
        
        if (!obsFlag) {
            [dogY, dogX] = [dogY + dy * howMuch, dogX + dx * howMuch];
        }
    }
    
    return [dogY, dogX];
}