def solution(k, m, score):
    return sum(i * m for i in sorted(score)[len(score) % m::m])