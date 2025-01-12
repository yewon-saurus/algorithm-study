function solution(arr) {
    return arr.map((ele) => {
        if (ele >= 50 && ele % 2 == 0) {
            return ele / 2;
        }
        else if (ele < 50 && ele % 2 == 1) {
            return ele * 2;
        }
        else return ele;
    });
}