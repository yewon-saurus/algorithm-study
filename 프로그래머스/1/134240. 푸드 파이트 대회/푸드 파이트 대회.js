function solution(food) {
    let answer = [0];
    
    food.slice(1).reverse().forEach((ele, idx) => {
        const count = Math.floor(ele / 2);
        const foodNum = food.length - (idx + 1);
        for (let i = 0; i < count; i++) answer = [foodNum, ...answer, foodNum];
    });
    
    return answer.join('');
}