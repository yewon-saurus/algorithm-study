function solution(survey, choices) {
    let answer = [];
    let table = {
        R: 0, T: 0,
        C: 0, F: 0,
        J: 0, M: 0,
        A: 0, N: 0,
    };
    
    survey.forEach((ele, idx) => {
        const [selected, score] = select(ele[0], ele[1], choices[idx]);
        table[selected] = table[selected] + score;
    });
    
    if (table['R'] >= table['T']) answer.push('R');
    else answer.push('T');
    
    if (table['C'] >= table['F']) answer.push('C');
    else answer.push('F');
    
    if (table['J'] >= table['M']) answer.push('J');
    else answer.push('M');
    
    if (table['A'] >= table['N']) answer.push('A');
    else answer.push('N');
    
    return answer.join('');
}

function select(a, b, idx) {
    switch(idx) {
        case 1:
            return [a, 3];
            break;
        case 2:
            return [a, 2];
            break;
        case 3:
            return [a, 1];
            break;
        case 5:
            return [b, 1];
            break;
        case 6:
            return [b, 2];
            break;
        case 7:
            return [b, 3];
            break;
        default:
            return ['idk', 0];
    }
}