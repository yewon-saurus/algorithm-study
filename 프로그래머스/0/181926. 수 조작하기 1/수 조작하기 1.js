function solution(n, control) {
    var answer = n;
    
    [...control].forEach(ele => answer += wasd(ele));
    
    return answer;
}

function wasd(input) {
    switch (input) {
        case "w": return 1;
        case "s": return -1;
        case "d": return 10;
        case "a": return -10;
        default: return null;
    }
}