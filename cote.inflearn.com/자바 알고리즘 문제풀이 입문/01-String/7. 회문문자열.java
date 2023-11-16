import java.util.*;
import java.io.*;
  
public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    String s = br.readLine();
    s = s.toLowerCase(); // 대소문자를 구분하지 않으므로

    int lt = 0, rt = s.length() - 1; // 마찬가지로, lt, rt를 이용해 보겠습니다.
    // (+) 아니면, 원래 문자열 vs reversed 문자열 비교해서, 둘이 같으면 그것도 회문문자열 인거겠죠
    // // (+) 문자열.equalsIgnoreCase() -> 와 이런것도 있네

    while (lt < rt) {
        if (s.charAt(lt) != s.charAt(rt)) {
            System.out.println("NO");
            return;
        }
        lt++;
        rt--;
    }

    System.out.println("YES");
    return;
  }
}