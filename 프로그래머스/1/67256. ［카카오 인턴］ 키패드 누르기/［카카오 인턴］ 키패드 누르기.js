const keypad = [
    [3, 1], // 0
    [0, 0], [0, 1], [0, 2],
    [1, 0], [1, 1], [1, 2],
    [2, 0], [2, 1], [2, 2],
    [3, 0], [3, 2], // *, #
];

function solution(numbers, hand) {
    let answer = [];
    let lHand = 10;
    let rHand = 11;
    
    numbers.forEach((ele) => {
        if (ele === 1 || ele === 4 || ele === 7) {
            lHand = ele;
            answer.push('L');
        }
        else if (ele === 3 || ele === 6 || ele === 9) {
            rHand = ele;
            answer.push('R');
        }
        else {
            const [targetX, targetY] = keypad[ele];
            const [lX, lY] = keypad[lHand];
            const [rX, rY] = keypad[rHand];
            
            if (Math.abs(targetX - lX) + Math.abs(targetY - lY) === Math.abs(targetX - rX) + Math.abs(targetY - rY)) {
                if (hand === 'left') {
                    lHand = ele;
                    answer.push('L');
                }
                else {
                    rHand = ele;
                    answer.push('R');
                }
            }
            else if (Math.abs(targetX - lX) + Math.abs(targetY - lY) < Math.abs(targetX - rX) + Math.abs(targetY - rY)) {
                lHand = ele;
                answer.push('L');
            }
            else {
                rHand = ele;
                answer.push('R');
            }
        }
    });
    
    return answer.join('');
}