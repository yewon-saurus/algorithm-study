function solution(sizes) {
    let [long, short] = [0, 0];
    
    for (const [w, h] of sizes) {
        const [l, s] = [Math.max(w, h), Math.min(w, h)];
        
        if (l <= long && s <= short) continue;
        else if (l <= long && s > short) short = s;
        else if (l > long && s <= short) long = l;
        else if (l > long && s > short) [long, short] = [l, s];
    }
    
    return long * short;
}