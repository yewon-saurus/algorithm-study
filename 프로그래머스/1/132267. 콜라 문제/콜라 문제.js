function solution(a, b, n) {
    let result = 0;
    while (n >= a) {
        let coke = Math.floor(n / a);
        result += coke * b;
        n = (coke * b) + (n % a);
    }
    return result;
}