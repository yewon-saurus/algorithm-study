function solution(numbers, hand) {
    let answer = [];
    let lHand = 10;
    let rHand = 11;
    
    numbers.forEach((target) => {
        if (target === 1 || target === 4 || target === 7) {
            lHand = target;
            answer.push('L');
        }
        else if (target === 3 || target === 6 || target === 9) {
            rHand = target;
            answer.push('R');
        }
        else {
            if (calcDistance(target, lHand) === calcDistance(target, rHand)) {
                if (hand === 'left') {
                    lHand = target;
                    answer.push('L');
                }
                else {
                    rHand = target;
                    answer.push('R');
                }
            }
            else if (calcDistance(target, lHand) < calcDistance(target, rHand)) {
                lHand = target;
                answer.push('L');
            }
            else {
                rHand = target;
                answer.push('R');
            }
        }
    });
    
    return answer.join('');
}

const calcDistance = (a, b) => {
    const keypad = [
        [3, 1], // 0
        [0, 0], [0, 1], [0, 2],
        [1, 0], [1, 1], [1, 2],
        [2, 0], [2, 1], [2, 2],
        [3, 0], [3, 2], // *, #
    ];
    
    const [X1, Y1] = keypad[a];
    const [X2, Y2] = keypad[b];
    
    return Math.abs(X1 - X2) + Math.abs(Y1 - Y2);
}