function solution(strArr) {
    return strArr.map((ele, idx) => idx % 2 === 1
                     ? ele.toUpperCase()
                     : ele.toLowerCase());
}