import java.util.*;
import java.io.*;
  
public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringBuffer sb;

    String result = "";
    int N = Integer.parseInt(br.readLine());
    StringTokenizer st = new StringTokenizer(br.readLine());
    for (int i = 0; i < N; i++) {
        String reversed = new StringBuffer(st.nextToken()).reverse().toString();
        int num = Integer.parseInt(reversed);
        if (isPrime(num)) result += String.valueOf(num) + " ";
    }

    System.out.println(result);
  }
  
  public static boolean isPrime(int n) {
    if (n == 1) return false;
    for (int i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
  }
}