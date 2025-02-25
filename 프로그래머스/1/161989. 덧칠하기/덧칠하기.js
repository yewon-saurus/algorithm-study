function solution(n, m, section) {
    let answer = 0;
    let wall = new Array(n).fill(1);
    section.forEach((ele) => wall[ele - 1] = 0);
    
    for (let i = 0; i <= n - m; i++) {
        if (wall[i] === 0) {
            ++answer;
            for (let j = i; j < i + m; j++) {
                wall[j] = 1;
            }
        }
    }
    
    for (let i = n - m; i < n; i++) {
        if (wall[i] === 0) {
            ++answer;
            break;
        }
    }
    
    return answer;
}