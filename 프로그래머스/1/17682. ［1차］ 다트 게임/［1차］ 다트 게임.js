function solution(dartResult) {
    let parsed = [];
    let result = [];
    
    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
            parsed.push(`${dartResult[i]}${dartResult[i + 1]}`);
            i += 1;
        }
        else if (dartResult[i] === 'S') parsed.push(1);
        else if (dartResult[i] === 'D') parsed.push(2);
        else if (dartResult[i] === 'T') parsed.push(3);
        else parsed.push(dartResult[i]);
    }
    
    for (let i = 0; i < parsed.length - 1; i += 2) {
        if (parsed[i + 2] === '*') {
            result.push(parsed[i] ** parsed[i + 1] * 2);
            if (result.length > 1) {
                result[result.length - 2] *= 2;
            }
            i += 1;
        }
        else if (parsed[i + 2] === '#') {
            result.push(parsed[i] ** parsed[i + 1] * (-1));
            i += 1;
        }
        else result.push(parsed[i] ** parsed[i + 1]);
        
        console.log(result, parsed[i], parsed[i + 1], parsed[i + 2]);
    }
    
    return result.reduce((acc, cur) => acc + cur, 0);
}