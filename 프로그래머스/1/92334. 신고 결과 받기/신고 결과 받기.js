function solution(id_list, report, k) {
    let answer = new Array(id_list.length).fill(0);
    let idMap = new Map(id_list.map((ele, idx) => [ele, idx]));
    let reportMap = new Map(id_list.map(ele => [ele, new Set()]));
    
    report.forEach((ele) => {
        const [from, to] = ele.split(' ');
        reportMap.set(to, new Set([...reportMap.get(to), from]));
    });
    
    for (const to of reportMap.keys()) {
        if (reportMap.get(to).size >= k) {
            reportMap.get(to).forEach((from) => {
                answer[idMap.get(from)] += 1;
            });
        }
    }
    
    return answer;
}