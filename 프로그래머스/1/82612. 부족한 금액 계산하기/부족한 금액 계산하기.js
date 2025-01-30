function solution(price, money, count) {
    const result = Array.from(new Array(count), (_, idx) => (idx + 1) * price).reduce((acc, cur) => acc + cur, 0) - money;
    return result >= 0 ? result : 0;
}