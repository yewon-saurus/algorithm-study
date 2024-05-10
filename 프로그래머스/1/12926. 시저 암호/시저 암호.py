def solution(s, n):
    answer = ''
    small = [chr(x) for x in range(97, 123)]
    big = [chr(x) for x in range(65, 91)]
    
    for i in s:
        if ord(i) >= 97 and ord(i) <= 122:
            answer += small[(small.index(i) + n) % 26]
        elif ord(i) >= 65 and ord(i) <= 90:
            answer += big[(big.index(i) + n) % 26]
        else:
            answer += i
    
    return answer