function solution(want, number, discount) {
    let answer = 0;
    const totalNumber = number.reduce((acc, cur) => acc + cur, 0);
    
    for (let i = 0; i < discount.length - number.length; i++) {
        const window = discount.slice(i, i + 10);
        let nums = number.slice();
        
        for (const w of window) {
            const idx = want.indexOf(w);
            if (idx !== -1) {
                nums[idx] -= 1;
            }
        }
        
        if (nums.every(n => n <= 0)) {
            answer += 1;
        }
    }
    
    return answer;
}