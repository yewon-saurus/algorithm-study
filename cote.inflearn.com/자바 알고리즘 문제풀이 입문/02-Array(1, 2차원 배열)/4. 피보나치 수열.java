import java.util.*;
import java.io.*;
  
public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    int N = Integer.parseInt(br.readLine());

    int[] fibo = new int[N];
    fibo[0] = fibo[1] = 1;
    for (int i = 2; i < N; i++) {
        fibo[i] = fibo[i-2] + fibo[i-1];
    }

    String result = "";
    for (int i = 0; i < N; i++) {
        result += fibo[i] + " ";
    }

    System.out.println(result);
  }
}