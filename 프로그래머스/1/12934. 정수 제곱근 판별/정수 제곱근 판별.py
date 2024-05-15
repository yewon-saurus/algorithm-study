# import math
def solution(n):
    answer = 0
    # print(math.sqrt(4))
    # print(4 ** (1/2))
    sqrt_n = n ** (1/2)
    if sqrt_n - int(sqrt_n) == 0:
        return (sqrt_n + 1) ** 2
    else:
        return -1