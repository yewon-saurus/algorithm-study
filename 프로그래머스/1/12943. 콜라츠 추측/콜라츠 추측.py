def solution(num):
    answer = 0
    col = num
    while col > 1:
        col = collatz(col)
        answer += 1
    return answer if answer < 500 else -1

def collatz(n):
    if n % 2 == 0:
        # 짝수라면
        return n // 2
    else:
        return n * 3 + 1