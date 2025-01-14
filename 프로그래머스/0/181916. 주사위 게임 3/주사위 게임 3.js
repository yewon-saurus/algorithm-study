function solution(a, b, c, d) {
    let answer = 0;
    let dice = [a, b, c, d];
    let diceTable = new Map();
    
    dice.forEach((ele) => diceTable.set(ele, (diceTable.get(ele) || 0) + 1));
    diceTable = [...diceTable].sort((a, b) => b[1] - a[1]);
    // diceTable = new Map([...diceTable].sort((a, b) => b[1] - a[1]));
    
    switch (diceTable.length) {
        case 1: {
            answer = diceTable[0][0] * 1111;
            break;
        }
        case 2: {
            const [p, q] = [diceTable[0][0], diceTable[1][0]];;
            if (diceTable[0][1] > 2) answer = (10 * p + q) ** 2;
            else answer = (p + q) * Math.abs(p - q);
            break;
        }
        case 3: {
            const [q, r] = [diceTable[1][0], diceTable[2][0]];
            answer = q * r;
            break;
        }
        case 4: {
            answer = [...dice].sort((a, b) => a - b)[0];
            break;
        }
        default: return;
    }
    
    return answer;
}