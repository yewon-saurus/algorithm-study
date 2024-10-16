function solution(score) {
    var gradeTable = [];
    var answer = [];
    
    score.forEach((item, index) => {
        const [eng, math] = item;
        gradeTable.push([index, (eng + math) / 2]);
    });
    
    gradeTable.sort((a, b) => b[1] - a[1]);
    
    gradeTable[0].push(1);
    for (let i = 1; i < gradeTable.length; i++) {
        if (gradeTable[i - 1][1] === gradeTable[i][1]) gradeTable[i].push(gradeTable[i - 1][2]);
        else gradeTable[i].push(i + 1);
    }
    
    gradeTable.sort((a, b) => a[0] - b[0]).forEach(item => answer.push(item[2]));
    
    return answer;
}