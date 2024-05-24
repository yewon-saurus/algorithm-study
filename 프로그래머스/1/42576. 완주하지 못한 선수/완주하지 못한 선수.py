def solution(participant, completion):
    participant.sort()
    completion.sort()
    i = 0
    while i < len(participant) - 1 and participant[i] == completion[i]:
        i += 1
    return participant[i]