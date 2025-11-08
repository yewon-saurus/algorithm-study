def solution(n):
    answer = 1
    while True:
        if 6 * answer % n == 0:
            return answer
        answer += 1
    return -1