def solution(s):
    answer = False
    upper_s = s.upper()
    p_cnt = 0
    y_cnt = 0
    for i in upper_s:
        if i == 'P':
            p_cnt += 1
        elif i == 'Y':
            y_cnt += 1
    if p_cnt == y_cnt: answer = True
    return answer