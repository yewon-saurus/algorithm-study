function solution(X, Y) {
    let answer = "";
    let arr_x = new Array(10).fill(0); // 0 ~ 9
    let arr_y = new Array(10).fill(0);
    
    for (const x of X) {
        arr_x[x]++;
    }
    for (const y of Y) {
        arr_y[y]++;
    }
    for (let i = 9; i >= 0; i--) {
        answer += `${i}`.repeat(Math.min(arr_x[i], arr_y[i]));
    }
    
    if (answer.length <= 0) return "-1";
    if (+answer === 0) return "0"
    return answer;
}