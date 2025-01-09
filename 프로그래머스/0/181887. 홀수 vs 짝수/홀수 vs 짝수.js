function solution(num_list) {
    return Math.max(
        num_list.filter((_, idx) => idx % 2).reduce((acc, cur) => acc + cur, 0),
        num_list.filter((_, idx) => !(idx % 2)).reduce((acc, cur) => acc + cur, 0)
    );
}