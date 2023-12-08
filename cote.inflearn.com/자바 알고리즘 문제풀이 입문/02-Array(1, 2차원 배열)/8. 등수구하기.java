import java.util.*;
import java.io.*;
  
public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int N = Integer.parseInt(br.readLine());

    StringTokenizer st = new StringTokenizer(br.readLine());
    int[] input = new int[N];
    for (int i = 0; i < N; i++) {
        int tmp = Integer.parseInt(st.nextToken());
        input[i] = tmp;
    }

    int[] result = new int[N];
    for (int i = 0; i < N; i++) {
        int rnk = 1;
        for (int j = 0; j < N; j++) {
            if (input[i] < input[j]) rnk++;
        }
        result[i] = rnk;
    }

    String answer = "";
    for (int i = 0; i < N; i++) answer += String.valueOf(result[i]) + " ";
    System.out.println(answer);
  }
}