function solution(s) {
    let [round, count] = [0, 0];
    
    while (s !== '1') {
        count += [...s].filter(v => v === '0').length;
        s = [...s].filter(v => v === '1').length.toString(2);
        round++;
    }
    
    return [round, count];
}