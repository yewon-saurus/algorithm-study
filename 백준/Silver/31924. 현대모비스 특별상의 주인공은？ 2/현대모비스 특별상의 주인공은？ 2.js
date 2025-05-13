const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let [N, ...table] = input;
table = table.map(ele => ele.split(''));

const dir = [
    [0, 1], [1, 1], [1, 0], [1, -1],
    [0, -1], [-1, -1], [-1, 0], [-1, 1]
];
const MOBIS = 'MOBIS';

function solution(N, table) {
    let answer = 0;

    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[0].length; j++) {
            if (table[i][j] === 'M') {
                for (const [dy, dx] of dir) {
                    let mobis = [];

                    for (let k = 0; k < 5; k++) {
                        if (
                            (i + dy * k) >= 0 && (i + dy * k) < table.length &&
                            (j + dx * k) >= 0 && (j + dx * k) < table[0].length
                        ) {
                            if (table[i + dy * k][j + dx * k] === MOBIS[k]) {
                                mobis.push(MOBIS[k]);
                            }
                        } // 이 범위 밖에서는 탐색 불가
                    }

                    if (mobis.join('') === MOBIS) {
                        answer += 1;
                    }

                    mobis = []; // 초기화
                }
            }
        }
    }

    return answer;
}

console.log(solution(N, table));