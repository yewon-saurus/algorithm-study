function solution(cards) {
    const answer = [];
    cards = [0, ...cards];
    
    for (let i = 1; i <= cards.length; i++) {
        let idx = i;
        let count = 0;
        while (true) {
            if (cards[idx]) {
                [cards[idx], idx] = [0, cards[idx]];
                count++;
            }
            else {
                answer.push(count);
                break;
            }
        }
    }
    
    const boxArr = answer.filter(item => item != 0).sort((a, b) => b - a);
    
    return boxArr.length > 1 ? boxArr[0] * boxArr[1] : 0;
}