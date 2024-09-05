function solution(priorities, location) {
    let answer = 1;
    let [head, tail] = [0, priorities.length - 1];
    let sortedPriorities = [...priorities].sort();
    
    while (head !== tail) {
        if (priorities[head] < sortedPriorities[sortedPriorities.length - 1]) {
            // 아직 우선순위 더 큰 게 남아 있으면?
            tail++;
            priorities.push(priorities[head]); // 맨 뒤로 보내고
            if (head === location) location = tail;
            head++; // dequeue
        }
        else if (priorities[head] === sortedPriorities[sortedPriorities.length - 1]) {
            if (head === location) break;
            answer++;
            head++;
            sortedPriorities.pop();
        }
        else {
            head++;
        }
    }
    
    return answer;
}