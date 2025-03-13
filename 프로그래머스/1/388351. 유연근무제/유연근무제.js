function solution(schedules, timelogs, startday) {
    schedules = [...schedules].map(convert);
    let day = startday - 1;
    let passTable = Array.from(new Array(schedules.length), (_) => Array.from(new Array(7), (_) => 0));
    
    timelogs.forEach((eachlog, idx) => {
        eachlog.forEach((ele) => {
            if (schedules[idx] >= ele || day === 5 || day === 6) {
                // 출근 성공 (토/일은 지각 안따짐)
                passTable[idx][day] += 1;
            }
            day = day >= 6 ? 0 : day + 1;
        });
        day = startday - 1;
    });
    
    return passTable.reduce((acc, cur) => {
        if (cur.filter(ele => ele > 0).length >= 7) return acc + 1;
        return acc;
    }, 0);
}

function convert(x) {
    let [h, m] = [Math.floor(x / 100), x % 100];
    
    if (m + 10 > 60) [h, m] = [h + 1, m + 10 - 60];
    else if (m + 10 === 60) [h, m] = [h + 1, 0];
    else m += 10;
    
    return h * 100 + m;
}