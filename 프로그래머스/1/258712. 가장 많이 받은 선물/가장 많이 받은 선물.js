function solution(friends, gifts) {
    let giftsLog = Array.from(new Array(friends.length), (_) => Array.from(new Array(friends.length), (_) => 0));
    let giftPoint = Array.from(new Array(friends.length), (_) => [0, 0, 0]); // 0: 준, 1: 받은, 2: 선물 지수
    let answer = new Array(friends.length).fill(0);
    
    // 주고받은 선물
    gifts.forEach((ele) => {
        const [from, to] = ele.split(' ');
        giftsLog[friends.indexOf(from)][friends.indexOf(to)] += 1;
        giftPoint[friends.indexOf(from)][0] += 1;
        giftPoint[friends.indexOf(to)][1] += 1;
    });
    
    // 선물 지수
    giftPoint.forEach((ele, idx) => {
        const [gift, gifted, _] = ele;
        giftPoint[idx][2] = gift - gifted;
    });
    giftPoint = [...giftPoint].map(ele => ele[2]);
    
    for (let i = 0; i < friends.length; i++) {
        for (let j = i; j < friends.length; j++) {
            if (giftsLog[i][j] > giftsLog[j][i]) {
                answer[i] += 1;
            }
            else if (giftsLog[i][j] < giftsLog[j][i]) {
                answer[j] += 1;
            }
            else {
                if (giftPoint[i] > giftPoint[j]) answer[i] += 1;
                else if (giftPoint[i] < giftPoint[j]) answer[j] += 1;
            }
        }
    }
    
    return Math.max(...answer);
}