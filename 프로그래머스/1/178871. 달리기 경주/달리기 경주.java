import java.util.*;

class Solution {
    public String[] solution(String[] players, String[] callings) {
        String[] answer = new String[players.length];
        
        Map<String, Integer> map = new HashMap<>();
        for (int i = 0; i < players.length; i++) {
//             넣기
            map.put(players[i], i);
        }
        
        for (String calling : callings) {
            int rank = map.get(calling); // 지금 불린 선수의 rank 가져와요
            String called = players[rank]; // 지금 불린 선수 이름 .. 다시 map에 put 해줘야 해서 저장해둠
            String front = players[rank - 1]; // 지금 불린 선수의 바로 앞
            
            players[rank] = front; // 앞서 감
            players[rank - 1] = called; // 앞애 있던 선수의 rank가, 지금 불린 선수의 rank로
            
            map.put(called, rank - 1); // 다시 넣음 .. 새로 입력되는 값으로 대치
            map.put(front, rank);
        }
        
        return players;
    }
}