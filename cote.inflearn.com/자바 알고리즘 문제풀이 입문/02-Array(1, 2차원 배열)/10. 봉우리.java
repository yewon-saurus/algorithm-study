import java.util.*;
import java.io.*;
  
public class Main {
    static int[] dx = {1, 0, -1, 0};
    static int[] dy = {0, 1, 0, -1};

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        int N = Integer.parseInt(br.readLine());
        int arr[][] = new int[N+2][N+2];
        int cnt = 0; // 봉우리 개수

        // 배열 채우기
        for (int i = 0; i < N + 2; i++) Arrays.fill(arr[i], 0);
        for (int i = 1; i <= N; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 1; j <= N; j++) {
                int tmp = Integer.parseInt(st.nextToken());
                arr[i][j] = tmp;
            }
        }

        // 확인하기
        for (int i = 1; i <= N; i++) {
            for (int j = 1; j <= N; j++) {
                int curr = arr[i][j];
                boolean isBong = true;
                for (int k = 0; k < 4; k++) {
                    if (curr <= arr[i + dx[k]][j + dy[k]]) isBong = false;
                }
                if (isBong) cnt++;
            }
        }

        System.out.println(cnt);
    }
}