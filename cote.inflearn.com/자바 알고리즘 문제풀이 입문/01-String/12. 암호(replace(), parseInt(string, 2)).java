import java.util.*;
import java.io.*;
  
public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    int N = Integer.parseInt(br.readLine());
    String code = br.readLine();

    String result = "";
    for (int i = 0; i < code.length()-1; i += 7) {
        String tmp = code.substring(i, i + 7);
        String binaryStr = "";
        for (int j = 0; j < 7; j++) {
            if (tmp.charAt(j) == '#') binaryStr += String.valueOf(1);
            else if (tmp.charAt(j) == '*') binaryStr += String.valueOf(0);
        } // 이러지 말고, 메서드 `replace()` 이용해서
        //`.replace('#', '1').replace('*', '')` 이렇게 바꿔도 되는거였네요
        
        int binary = Integer.parseInt(binaryStr, 2);
        // System.out.println(String.valueOf(binary));

        char alph = (char)binary;
        result += String.valueOf(alph);
    }

    System.out.println(result);
  }
}