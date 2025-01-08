function solution(my_string) {
    // 65 ~ 90
    // 97 ~ 122
    let count_table = new Array(52).fill(0);
    [...my_string].map(ele => ele.charCodeAt()).forEach((ele) => {
        let index = null;
        if (ele >= 65 && ele <= 90) index = -(65 - ele);
        else index = 26 -(97 - ele);
        
        count_table[index] = count_table[index] + 1;
    });
    return count_table;
}