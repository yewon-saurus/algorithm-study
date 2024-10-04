function solution(n) {
    const primeTable = new Array(n + 1).fill(true); // idx 0은 깍두기
    [primeTable[0], primeTable[1]] = [false, false]; // 0은 깍두기였고, 1은 소수가 아님
    
    // 루프 돌면서 소수가 아닌 애들은 탈락시키기(false)
    for (let i = 2; i * i <= n; i++) {
        if (primeTable[i]) {
            for (let j = i * 2; j <= n; j += i) {
                // 2의 배수가 되는 수 모두 탈락,
                // 3의 배수가 되는 수 모두 탈락, ...
                primeTable[j] = false;
            }
        }
    }
    
    return primeTable.filter(Boolean).length;
}