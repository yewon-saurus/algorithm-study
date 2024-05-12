def solution(s):
    answer = ''
    turn_big = True
    for i in range(len(s)):
        if s[i - 1] == ' ':
            turn_big = True
        
        if turn_big:
            answer += s[i].upper()
        else:
            answer += s[i].lower()
            
        turn_big = not turn_big
    return answer