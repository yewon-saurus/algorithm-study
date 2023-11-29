import java.io.*;
import java.util.*;
  
public class Main {
  public static void main(String[] args) throws IOException{
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    int N = Integer.parseInt(br.readLine());

    StringTokenizer st = new StringTokenizer(br.readLine());

    int[] arr = new int[N];
    for (int i = 0; i < N; i++) {
        arr[i] = Integer.parseInt(st.nextToken());
    }

    String result = String.valueOf(arr[0]);
    for (int i = 1; i < N; i++) {
        if (arr[i] > arr[i-1]) result += " " + String.valueOf(arr[i]);
    }

    System.out.println(result);
  }
}