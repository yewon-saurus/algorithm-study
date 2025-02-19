function solution(N, stages) {
    let eachStageUsers = new Array(N + 1).fill(0).map(ele => [ele, ele]);
    let successRates = new Array(N).fill(0).map((ele, idx) => [ele, idx + 1]);
    
    stages.forEach((ele) => {
        for (let i = 0; i < ele; i++) {
            eachStageUsers[i][0] += 1; // 도전 플레이어 수
            if (i > 0) eachStageUsers[i - 1][1] += 1; // 클리어 플레이어 수
        }
    });
    
    for (let i = 0; i < N; i++) {
        successRates[i][0] = (eachStageUsers[i][0] - eachStageUsers[i][1]) / eachStageUsers[i][0];
    }
    
    return successRates.sort((a, b) => b[0] - a[0]).map(ele => ele[1]);
}