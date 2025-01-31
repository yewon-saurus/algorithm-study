function solution(n) {
    return convert10to3(n).reduce((acc, cur, idx) => acc + cur * 3**idx, 0);
}

const convert10to3 = (n, arr=[]) => {
    if (n < 3) return [n, ...arr];
    else return convert10to3(Math.floor(n / 3), [n % 3, ...arr]);
}