import java.util.*;
import java.io.*;
  
public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    String s = br.readLine();
    String answer = "";
    for (int i = 0; i < s.length(); i++) {
      if (s.indexOf(s.charAt(i)) == i) {
        // * 문자열.indexOf(x)
        // : 문자열에서 x라는 char가 '처음으로 나온' index를 return함
        // 무조건 '처음으로 나온' index만 return. 강조.
        // 중복이 아님
        answer += s.charAt(i);
      }
    }

    System.out.println(answer);
  }
}