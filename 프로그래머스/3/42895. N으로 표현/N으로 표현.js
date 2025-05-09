function solution(N, number) {
    let records = Array.from(new Array(10), () => new Set());
    
    if (N === number) return 1;
    else {
        records.forEach((ele, idx) => {
            if (idx !== 0) ele.add(Number(String(N).repeat(idx)));
        });
        
        for (let i = 1; i < 10; i++) {
            for (let j = 1; j < i; j++) {
                for (const first of records[j]) {
                    for (const second of records[i - j]) {
                        records[i].add(first+second);
                        records[i].add(first-second);
                        records[i].add(first*second);
                        records[i].add(first/second);
                    }
                }
            }
            if (records[i].has(number)) return i;
        }
        return -1;
    }
    return 0;
}