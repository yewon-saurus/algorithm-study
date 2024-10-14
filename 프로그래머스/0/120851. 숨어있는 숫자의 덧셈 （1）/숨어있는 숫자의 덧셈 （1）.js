function solution(my_string) {
    return [...my_string].filter(item => item == Number(item)).reduce((acc, cur) => acc += Number(cur), 0);
}