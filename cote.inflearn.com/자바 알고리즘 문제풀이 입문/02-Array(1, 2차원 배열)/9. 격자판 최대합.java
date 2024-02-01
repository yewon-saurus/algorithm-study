import java.util.*;
import java.io.*;
  
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        int N = Integer.parseInt(br.readLine());

        int sum = 0;
        int max = 0;

        // 입력 저장과 동시에 행 최대합 구하기
        int arr[][] = new int[N][N];
        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < N; j++) {
                int tmp = Integer.parseInt(st.nextToken());
                sum += tmp;
                arr[i][j] = tmp;
            }
            if (sum > max) max = sum;
            sum = 0;
        }

        // 최대합 찾기
        // 열
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                sum += arr[j][i];
            }
            if (sum > max) max = sum;
            sum = 0;
        }

        // 대각선
        for (int i = 0; i < N; i++) {
            sum += arr[i][i];
        }
        if (sum > max) max = sum;
        sum = 0;
        
        // 대각선2
        for (int i = 0; i < N; i++) {
            sum += arr[N-i-1][i];
        }
        if (sum > max) max = sum;
        
        System.out.println(max);
    }
}