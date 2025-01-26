function solution(numbers) {
    return Array.from(new Array(10), (_, idx) => idx).reduce((acc, cur) => acc + cur, 0) - numbers.reduce((acc, cur) => acc + cur, 0);
}