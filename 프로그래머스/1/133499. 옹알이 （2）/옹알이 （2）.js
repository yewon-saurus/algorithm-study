function solution(babbling) {
    const regexp1 = /(aya|ye|woo|ma)\1+/;
    const regexp2 = /^(aya|ye|woo|ma)+$/;
    
    return babbling.reduce((answer, cur) => {
        return !regexp1.test(cur) && regexp2.test(cur) ? answer + 1 : answer;
    }, 0);
}