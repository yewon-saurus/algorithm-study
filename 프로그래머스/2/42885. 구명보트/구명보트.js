function solution(people, limit) {
    let answer = 0;
    let left = 0;
    let right = people.length - 1;
    
    // people01 = [...people.sort((a, b) => a - b)];
    people.sort((a, b) => b - a);
    
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;
            right--;
        }
        else {
            left++;
        }
        answer++;
    }
    
    return answer;
}