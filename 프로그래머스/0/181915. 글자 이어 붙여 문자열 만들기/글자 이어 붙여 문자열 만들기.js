function solution(my_string, index_list) {
    return index_list.map((ele) => my_string[ele]).join('');
}