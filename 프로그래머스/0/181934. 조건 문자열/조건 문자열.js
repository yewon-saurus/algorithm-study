function solution(ineq, eq, n, m) {
    let answer = false;
    
    if (ineq === ">" && eq === "=") answer =  (n >= m);
    else if (ineq === "<" && eq === "=") answer =  (n <= m);
    else if (ineq === ">" && eq === "!") answer =  (n > m);
    else if (ineq === "<" && eq === "!") answer =  (n < m);
    
    return answer ? 1 : 0;
}