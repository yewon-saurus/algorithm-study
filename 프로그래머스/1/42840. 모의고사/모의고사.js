const soopoFreq = [5, 8, 10];
const soopo1 = [1, 2, 3, 4, 5];
const soopo2 = [2, 1, 2, 3, 2, 4, 2, 5];
const soopo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

function solution(answers) {
    let score = [0, 0, 0];
    
    answers.forEach((ele, idx) => {
        const mod = soopoFreq.map(ele => idx % ele);
        if (ele === soopo1[mod[0]]) score[0] += 1;
        if (ele === soopo2[mod[1]]) score[1] += 1;
        if (ele === soopo3[mod[2]]) score[2] += 1;
    });
    
    return score.map((ele, idx) => [ele, idx + 1]).filter(ele => ele[0] === Math.max(...score)).map(ele => ele[1]);
}