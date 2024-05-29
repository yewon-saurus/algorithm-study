def solution(n):
    arr = {}
    arr[1] = 1
    arr[2] = 2
    for i in range(3, n+1):
        arr[i] = arr[i - 2] + arr[i - 1]
    return arr[n] % 1234567