def solution(numer1, denom1, numer2, denom2):
    numer = numer1 * denom2 + numer2 * denom1
    denom = denom1 * denom2
    gcd_result = gcd(denom, numer)
    return [numer / gcd_result, denom / gcd_result]

def gcd(a, b):
    if (a % b == 0):
        return b
    return gcd(b, a % b)