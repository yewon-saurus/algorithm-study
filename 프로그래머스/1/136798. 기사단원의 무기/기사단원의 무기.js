function solution(number, limit, power) {
    let fe_agg = 0;
    
    for (let i = 1; i <= number; i++) {
        let atk = calcDiv(i).length;
        if (atk > limit) fe_agg += power;
        else fe_agg += atk;
    }
    
    return fe_agg;
}

// 약수 구하기
function calcDiv(number) {
    let div_arr = [];
    
    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            div_arr.push(i);
            if(number / i != i) div_arr.push(number / i);
        }
    }
    
    return div_arr;
}