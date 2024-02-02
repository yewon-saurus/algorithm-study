import java.util.*;
import java.io.*;
  
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int K = Integer.parseInt(st.nextToken());
        
        int[] arr = new int[N];
        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < N; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }

        int sum = 0;

        // 준비
        for (int i = 0; i < K; i++) {
            sum += arr[i];
        }
        int max = sum;

        // 시작
        for (int i = K; i < N; i++) {
            sum = sum + arr[i] - arr[i - K];
            if (sum > max) max = sum;
        }

        System.out.println(max);
    }
}