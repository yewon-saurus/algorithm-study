function solution(num_list) {
    let [odd, even] = ['', ''];
    
    num_list.forEach((cur, idx) => {
        if (cur % 2 === 0) even += cur;
        else odd += cur;
    });
    
    return parseInt(odd) + parseInt(even);
}