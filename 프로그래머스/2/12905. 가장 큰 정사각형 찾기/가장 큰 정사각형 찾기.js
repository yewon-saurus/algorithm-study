function solution(board) {
    let maxWidth = 0;
    
    if (board.length <= 1 || board[0].length <= 1) return 1;
    
    for (let i = 1; i < board.length; i++) {
        for (let j = 1; j < board[0].length; j++) {
            if (board[i][j] === 0) continue;
            
            const [left, up, letup] = [board[i][j - 1], board[i - 1][j], board[i - 1][j - 1]];
            board[i][j] = Math.min(left, up, letup) + 1;
            maxWidth = Math.max(maxWidth, board[i][j]);
        }
    }
    
    return maxWidth * maxWidth;
}