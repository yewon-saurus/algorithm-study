import java.util.*;
import java.io.*;
  
public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int N = Integer.parseInt(br.readLine());

    StringTokenizer st = new StringTokenizer(br.readLine());
    int bonus = 1;
    int result = 0;
    for (int i = 0; i < N; i++) {
        int tmp = Integer.parseInt(st.nextToken());
        if (tmp == 1) {
            result += bonus;
            bonus++;
        }
        else bonus = 1;
    }

    System.out.println(String.valueOf(result));
  }
}