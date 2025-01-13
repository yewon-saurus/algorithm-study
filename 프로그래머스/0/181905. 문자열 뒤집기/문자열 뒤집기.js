function solution(my_string, s, e) {
    const part1 = my_string.slice(0, s);
    const part2 = [...my_string].slice(s, e + 1).reverse();
    const part3 = my_string.slice(e + 1, my_string.length);
    
    return [...part1, ...part2, ...part3].join('');
}