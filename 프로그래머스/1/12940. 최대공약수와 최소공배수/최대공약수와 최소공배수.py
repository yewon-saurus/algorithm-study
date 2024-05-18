def solution(n, m):
    answer = []
    for i in range(max(m, n), 0, -1):
        print(i)
        if max(m, n) % i == 0 and min(m, n) % i == 0:
            answer.append(i)
            break
    for i in range(max(m, n), m*n + 1):
        if i % m == 0 and i % n == 0:
            answer.append(i)
            break
    return answer