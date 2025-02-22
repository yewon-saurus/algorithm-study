const A_MONTH = 28;

function solution(today, terms, privacies) {
    let answer = [];
    let termTable = new Map();
    
    terms.forEach((ele) => {
        const [term, expiration] = ele.split(' ');
        termTable.set(term, expiration);
    });
    
    privacies.forEach((ele, idx) => {
        const [collect, term] = ele.split(' ');
        let [collectY, collectM, collectD] = collect.split('.').map(Number);
        const [todayY, todayM, todayD] = today.split('.').map(Number);
        
        const expirationPeriod = Number(termTable.get(term));
        let calced = collectM + expirationPeriod;
        if (calced > 12) {
            let count = 0;
            while (calced > 12) {
                calced -= 12;
                ++count;
            }
            collectY += count;
            collectM = calced;
            collectM = collectM === 0 ? 12 : collectM;
        }
        else {
            collectM += expirationPeriod;
        }
        
        if (
            todayY > collectY ||
            (todayY == collectY && todayM > collectM) ||
            (todayY == collectY && todayM == collectM && todayD > collectD - 1)
        ) {
            answer.push(idx + 1);
        }
    });
    
    return answer;
}