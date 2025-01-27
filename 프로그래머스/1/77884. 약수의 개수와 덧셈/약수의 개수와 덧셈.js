function solution(left, right) {
    let answer = 0;
    
    for (let i = left; i <= right; i++) {
        if (count(i) % 2 === 0) answer += i;
        else answer -= i;
    }
    
    return answer;
}

const count = (num) => Array.from(new Array(num), (_, idx) => idx + 1).filter(ele => num % ele === 0).length;