function solution(my_string) {
    var answer = [];
    for (char of my_string) {
        const ascii = char.charCodeAt();
        if (ascii >= 65 && ascii <= 90) answer.push(char.toLowerCase());
        else answer.push(char.toUpperCase());
    }
    
    return answer.join('');
}