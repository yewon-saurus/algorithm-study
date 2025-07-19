function solution(n, m) {
    let [a, b] = [n, m].sort((a, b) => a - b);
    return [gcd(a, b), lcm(a, b)];
}

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function lcm(a, b) {
    return a * b / gcd(a, b);
}