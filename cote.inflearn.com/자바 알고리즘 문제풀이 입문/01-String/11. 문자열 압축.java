import java.util.*;
import java.io.*;
  
public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    String s = br.readLine() + " ";
    char[] arr = s.toCharArray();

    String result = "";
    int cnt = 1;
    for (int i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i+1]) {
            cnt++;
        }
        else {
            result += String.valueOf(arr[i]);
            if (cnt != 1) result += String.valueOf(cnt);
            cnt = 1;
        }
    }

    System.out.println(result);
  }
}