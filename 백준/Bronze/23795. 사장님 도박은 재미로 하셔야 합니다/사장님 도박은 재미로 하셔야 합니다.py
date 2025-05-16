def solution(betting):
    return sum(betting)


if __name__ == "__main__":
    money_list = []
    
    while True:
        money = int(input())
        
        if money == -1:
            break
            
        money_list.append(money)
        
    print(solution(money_list))