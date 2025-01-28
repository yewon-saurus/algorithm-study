function solution(absolutes, signs) {
    return absolutes.map((ele, idx) => calc(ele, signs[idx])).reduce((acc, cur) => acc + cur, 0);
}

const calc = (num, sign) => sign ? +num : -num;