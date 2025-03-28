def solution(arr):
    answer = 2
    
    while True:
        answer += 1
        if all(answer % ele == 0 for ele in arr):
            break
    
    return answer
