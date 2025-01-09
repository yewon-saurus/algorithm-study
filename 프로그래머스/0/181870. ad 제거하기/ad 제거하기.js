function solution(strArr) {
    return strArr.filter((ele) => !/ad/.exec(ele));
}