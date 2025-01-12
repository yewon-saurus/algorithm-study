function solution(arr) {
    let flag = true;
    let x = 0;
    let prevArr = [...arr];
    
    while (flag) {
        arr = arr.map((ele) => {
            if (ele >= 50 && ele % 2 == 0) return ele / 2;
            else if (ele < 50 && ele % 2 == 1) return ele * 2 + 1;
            else return ele;
        });
        
        if (arr.join('.') == prevArr.join('.')) flag = false;
        
        x += 1;
        prevArr = arr;
    }
    
    return x - 1;
}