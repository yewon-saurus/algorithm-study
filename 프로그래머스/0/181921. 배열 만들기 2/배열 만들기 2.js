function solution(l, r) {
    let tree = [5]; // 5는 root
    
    // index
    let cur, left, right;
    
    const needVisit = [0];
    while (tree[tree.length - 1] < r) {
        cur = needVisit.shift();
        left = cur * 2 + 1;
        right = cur * 2 + 2;
        needVisit.push(left, right);
        
        tree[left] = tree[cur] * 10;
        tree[right] = tree[cur] * 10 + 5;
    }
    tree = tree.filter(ele => ele >= l && ele <= r);
    
    return tree.length === 0 ? [-1] : tree;
}