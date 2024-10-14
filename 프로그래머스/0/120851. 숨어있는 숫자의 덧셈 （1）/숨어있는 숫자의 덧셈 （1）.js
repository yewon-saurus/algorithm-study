function solution(my_string) {
    return [...my_string].filter(item => item == Number(item)).map(item => Number(item)).reduce((acc, cur) => acc += cur, 0);
}