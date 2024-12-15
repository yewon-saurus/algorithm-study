const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    answer = [];
    
    for (const char of str) {
        const charCode = char.charCodeAt();
        if (charCode >= 97 && charCode <= 122) answer.push(char.toUpperCase());
        else answer.push(char.toLowerCase());
    }
    
    console.log(answer.join(''));
});