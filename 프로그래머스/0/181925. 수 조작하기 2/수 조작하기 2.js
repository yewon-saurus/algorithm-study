const controlTable = {
    '1': 'w',
    '-1': 's',
    '10': 'd',
    '-10': 'a',
}

function solution(numLog) {
    const answer = [];
    
    for (let i = 0; i < numLog.length - 1; i++) {
        answer.push(controlTable[numLog[i + 1] - numLog[i]]);
    }
    
    return answer.join('');
}