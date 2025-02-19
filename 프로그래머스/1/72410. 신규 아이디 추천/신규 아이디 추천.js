function solution(new_id) {
    new_id = new_id.toLowerCase(); // 1
    new_id = new_id.match(/[a-z0-9-_.]/g).join(''); // 2
    new_id = new_id.replace(/\.+/g, '.'); // 3
    new_id = new_id.replace(/^\.|\.$/g, ''); // 4
    new_id = new_id.length <= 0 ? 'a' : new_id; // 5
    new_id = new_id.slice(0, 15); // 6
    new_id = new_id.replace(/\.$/g, ''); // 4
    
    const repeatCount = 3 - new_id.length < 0 ? 0 : 3 - new_id.length;
    new_id = new_id + new_id[new_id.length - 1].repeat(repeatCount);
    
    return new_id;
}