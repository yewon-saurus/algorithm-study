function solution(progresses, speeds) {
    let answer = [];
    
    while (progresses.length > 0) {
        let batchCount = 0;
        
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }
        
        while (progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            batchCount++;
        }
        
        if (batchCount > 0) answer.push(batchCount);
        console.log(answer, batchCount, progresses)
    }
    
    return answer;
}