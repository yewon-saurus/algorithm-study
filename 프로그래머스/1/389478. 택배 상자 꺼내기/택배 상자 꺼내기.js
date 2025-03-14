function solution(n, w, num) {
    let boxes = [];
    let target_x = -1;
    
    for (let i = 1; i <= n; i += w) {
        let i_floor = [];
        
        for (let j = i; j < i + w; j++) {
            const temp = j <= n ? j : null;
            if (boxes.length % 2 === 0) {
                i_floor.push(temp);
            }
            else {
                // 역순
                i_floor = [temp, ...i_floor];
            }
        }
        
        target_x = i_floor.indexOf(num) >= 0 ? i_floor.indexOf(num) : target_x;
        boxes.push(i_floor);
    }
    
    return boxes.map(floor => floor.filter((ele, idx) => idx === target_x)).flat().filter(ele => ele && ele >= num).length;
}