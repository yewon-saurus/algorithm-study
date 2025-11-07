def solution(array):
    check = [0 for _ in range(max(array) + 1)]
    
    for i in array:
        check[i] += 1
    
    max_value = max(check)
    
    if check.count(max_value) > 1:
        return -1
    
    return check.index(max_value)