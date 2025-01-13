function solution(start_num, end_num) {
    return Array.from(new Array(end_num + 1), (_, idx) => idx).filter((ele) => ele >= start_num && ele <= end_num);
}