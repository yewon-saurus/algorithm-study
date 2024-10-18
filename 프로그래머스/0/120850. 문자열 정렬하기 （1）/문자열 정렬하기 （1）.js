function solution(my_string) {
    return [...my_string].map(item => Number(item)).filter(item => item >= 0 && item <= 9).sort((a, b) => a - b);
}