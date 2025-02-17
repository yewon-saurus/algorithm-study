function solution(lottos, win_nums) {
    let not_dup = [];
    let zero_count = 0;
    
    lottos.forEach((ele) => {
        if (ele === 0) zero_count += 1;
        if (ele !== 0 && !win_nums.includes(ele)) not_dup.push(ele);
    });
    
    return [6 - not_dup.length, 6 - not_dup.length - zero_count].map(convertToRank);
}

const convertToRank = (correct_count) => {
    const rankTable = [6, 6, 5, 4, 3, 2, 1];
    return rankTable[correct_count];
};