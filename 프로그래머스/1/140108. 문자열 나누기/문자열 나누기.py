def solution(s):
    answer = 0
    check = {
        "first": 0,
        "second": 0,
    }
    k = 0
    
    for i in s:
        if check['first'] == check['second']:
            answer += 1
            k = i
            
        if k == i:
            check['first'] += 1
        else:
            check['second'] += 1

    return answer