// 12x1
// 6x2
// 4x3

function solution(brown, yellow) {
    let answer = [];
    let yFactors = calcFactors(yellow);
    
    yFactors.forEach((ele) => {
        if (
            ele >= Math.floor(yellow / ele) &&
            (ele + 2) * (Math.floor(yellow / ele) + 2) - yellow === brown
        ) answer = [(ele + 2), (Math.floor(yellow / ele) + 2)];
    });
    
    return answer;
}

function calcFactors(n) {
    let factors = [];
    
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            factors.push(i);
            if (n / i !== i) factors.push(n / i);
        }
    }
    
    return factors.sort((a, b) => b - a);
}