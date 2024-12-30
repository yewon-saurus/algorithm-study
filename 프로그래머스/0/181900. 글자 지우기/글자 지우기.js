function solution(my_string, indices) {
    return [...my_string].filter((ele, idx) => !indices.includes(idx)).join('');
}