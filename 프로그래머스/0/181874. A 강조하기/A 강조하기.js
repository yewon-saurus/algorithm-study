function solution(myString) {
    return [...myString].map((ele) => ele == 'a' || ele == 'A'
                       ? ele.toUpperCase()
                       : ele.toLowerCase()).join('');
}