const joka = ['aya', 'ye', 'woo', 'ma'];

function solution(babbling) {
    let answer = 0;
    
    for (let bab of babbling) {
        for (const ele of joka) {
            if (bab.includes(ele.repeat(2))) break;
            bab = bab.split(ele).join(' ');
        };
        
        if (bab.split(' ').join('').length === 0) answer += 1;
    };
    
    return answer;
}