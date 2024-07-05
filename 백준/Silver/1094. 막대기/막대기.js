const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = 0;

rl.on("line", (line) => {
    input = line;
}).on("close", () => {
    solution(input);
    process.exit();
});

function solution(X) {
    let list = [64, 32, 16, 8, 4, 2, 1];
    let count = 0;
    
    list = list.filter((item) => item <= X);

    while (X > 0) {
        if (list[0] <= X) {
            X -= list[0];
            count++;
        }
        list.shift(1);
    }
    console.log(count);
}
