function solution(bridge_length, weight, truck_weights) {
    let bridge = new Array(bridge_length).fill(null);
    let bridgeWeightSum = 0;
    let time = 0;
    
    while (bridge.length > 0 || truck_weights.length > 0) {
        const bridgeHead = bridge.shift();
        if (bridgeHead) {
            // 트럭 빠져나갔어요 무게 뺄게요
            bridgeWeightSum -= bridgeHead;
        }
        
        if (truck_weights.length > 0) {
            // 남은 트럭이 있어요
            
            const target = truck_weights[0];
            bridge.push(target);
            bridgeWeightSum += target;
            
            if (bridgeWeightSum > weight) {
                // 무게 초과했어요 빠꾸할게요
                bridge.pop();
                bridgeWeightSum -= target;
                bridge.push(null); // 빈 공간
            }
            else {
                // 무사히 다리에 진입했어요
                truck_weights.shift();
            }
        }
        
        time++; // 시간은 계속 흐른다..
    }
    
    return time;
}