function solution(n, arr1, arr2) {
    let answer = new Array(n);
    
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = convert(n, arr1[i]);
        arr2[i] = convert(n, arr2[i]);
        answer[i] = [...arr1[i]].map((_, idx) => arr1[i][idx] == 1 || arr2[i][idx] == 1 ? 1 : 0);
    }
    
    return answer.map(ele => ele.map(e => e ? '#' : ' ').join(''));
}

function convert(padNum, number) {
    return number.toString(2).padStart(padNum, '0');
}