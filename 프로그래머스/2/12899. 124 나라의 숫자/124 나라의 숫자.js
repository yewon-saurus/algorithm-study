function solution(n) {
    return convertTo124(n);
}

function convertTo124(n) {
    let result = [];
    const convertTable = [4, 1, 2];
    // 나머지 계산 결과(배열의 index 값에 대응)에 따른 result 출력 값 매칭
    // 3을 3으로 나누었을 때 나머지가 0 -> 4로 변환되어야 함
    // 1을 3으로 나누었을 때 나머지가 1
    // 2를 3로 나누었을 때 나머지가 2
    
    while (n > 0) {
        result = [convertTable[n % 3], ...result];
        n = n % 3 === 0 ? n - 1 : n;
        n = Math.floor(n / 3);
    }
    
    return result.join('');
}