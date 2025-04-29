function solution(prices) {
    const stack = [];
    const answer = new Array(prices).fill(0);
    
    for (let i = 0; i < prices.length; i++) {
        
        while (stack.length && stack[stack.length - 1][0] > prices[i]) {
            const [p, index] = stack.pop();
            answer[index] = i - index;
        }
        stack.push([prices[i],i])
    }
    
    while (stack.length) {
        const [p, index] = stack.pop();
        answer[index] = prices.length - 1 - index;
    }
    return answer;
}