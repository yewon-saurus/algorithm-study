function solution(n, q, ans) {
    let answer = 0;
    let numbers = Array.from(new Array(n), (_, idx) => idx + 1);
    
    combination(numbers, 5).forEach(combEle => {
        let count = new Array(q.length);
        q.forEach((qEle, qIdx) => {
            count[qIdx] = qEle.filter(ele => combEle.includes(ele)).length;
        });
        
        if (count.join('') === ans.join('')) answer += 1;
    });
    
    return answer;
}

function combination(arr, n) {
    if (n === 1) return arr.map(v => [v]);
    const result = [];
    
    arr.forEach((fixed, idx, arr) => {
        const rest = arr.slice(idx + 1);
        const combis = combination(rest, n - 1);
        const combine = combis.map(v => [fixed, ...v]);
        result.push(...combine);
    });
    
    return result;
}