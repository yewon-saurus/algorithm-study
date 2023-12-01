import java.io.*;
import java.util.*;
  
public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int N = Integer.parseInt(br.readLine());

    int cnt = 0;
    // 에라토스테네스 체가 소수 구하는 방법 중 가장 빠름
    int[] arr = new int[N + 1];
    for (int i = 2; i < N + 1; i++) {
        if (arr[i] == 0) {
            cnt++;
            for (int j = 0; j <= N; j+=i) arr[j] = 1;
        }
    }
    
    System.out.println(String.valueOf(cnt));
  }
}