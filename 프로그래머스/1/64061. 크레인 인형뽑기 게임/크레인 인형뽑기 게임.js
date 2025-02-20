function solution(board, moves) {
    let boardStackArr = new Array(board.length).fill([]);
    let basket = [];
    let answer = 0;
    
    board.reverse().forEach((x) => {
        x.forEach((y, idx) => {
            if (y !== 0) boardStackArr[idx] = [...boardStackArr[idx], y];
        });
    });
    
    moves.map(ele => ele - 1).forEach((ele) => {
        const doll = boardStackArr[ele].pop();
        if (doll) {
            if (basket[basket.length - 1] === doll) {
                basket.pop();
                answer += 2;
            }
            else {
                basket.push(doll)
            }
        }
    });
    
    return answer;
}