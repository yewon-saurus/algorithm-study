function solution(number) {
    return [...number].map(ele => +ele).reduce((acc, cur) => acc + cur, 0) % 9;
}