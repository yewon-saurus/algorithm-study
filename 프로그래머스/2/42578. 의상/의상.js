function solution(clothes) {
    let answer = 1;
    let clothMap = new Map();
    
    for ([cloth, category] of clothes) {
        const isCloth = clothMap.get(category);
        if (!isCloth) clothMap.set(category, 1);
        else clothMap.set(category, isCloth + 1);
    }
    
    for ([category, count] of clothMap) answer *= count + 1;
    
    return answer - 1; // 모든 의상을 입지 않는 경우는 제외
}