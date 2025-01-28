const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function solution(s) {
    const result = [];
    let stack = [];
    
    for (const char of s) {
        if (char == +char) result.push(char);
        else {
            stack.push(char);
            if (words.indexOf(stack.join('')) != -1) {
                result.push(words.indexOf(stack.join('')));
                stack.length = 0;
            }
        }
    }
    
    return +result.join('');
}