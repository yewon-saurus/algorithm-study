function solution(lottos, win_nums) {
    let not_dup = [];
    let zero_count = 0;
    
    lottos.forEach((ele) => {
        if (ele === 0) zero_count += 1;
        if (ele !== 0 && !win_nums.includes(ele)) not_dup.push(ele);
        console.log(zero_count, not_dup, ele)
    });
    
    return [6 - not_dup.length, 6 - not_dup.length - zero_count].map(convertToRank);
}

const convertToRank = (correct_count) => {
    switch (correct_count) {
        case 6:
            return 1;
            break;
        case 5:
            return 2;
            break;
        case 4:
            return 3;
            break;
        case 3:
            return 4;
            break;
        case 2:
            return 5;
            break;
        default:
            return 6;
            break;
    }
};