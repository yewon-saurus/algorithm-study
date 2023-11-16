import java.util.*;
import java.io.*;
  
public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    String answer = "";
    char[] input = br.readLine().toCharArray();
    for (char x : input) {
        // '0' ~ '9' -> 48 ~ 57
        if (x >= 48 && x <= 57) answer += String.valueOf(x);
    }
    
    int result = Integer.parseInt(answer);
    System.out.println(String.valueOf(result));
  }
}