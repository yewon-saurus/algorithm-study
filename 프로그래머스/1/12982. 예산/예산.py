def solution(d, budget):
    answer = 0
    budget_used = 0
    for i in sorted(d):
        budget_used += i
        if budget_used > budget:
            break
        answer += 1
    return answer