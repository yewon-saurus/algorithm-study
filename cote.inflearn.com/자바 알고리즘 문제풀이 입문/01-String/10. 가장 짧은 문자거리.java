import java.util.*;
import java.io.*;
  
public class Main {
    public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    StringTokenizer st = new StringTokenizer(br.readLine());

    String s = st.nextToken();
    char t = st.nextToken().charAt(0);

    int[] answer = new int[s.length()];
    int p = 1000;
    for (int i = 0; i < s.length(); i++) {
        if (s.charAt(i) == t) {
            p = 0;
            answer[i] = p;
        }
        else {
            p++;
            answer[i] = p;
        }
    }
    
    for (int i = s.length() - 1; i >= 0; i--) {
        if (s.charAt(i) == t) p = 0;
        else {
            p++;
            answer[i] = Math.min(answer[i], p);
        }
    }

    for (int i = 0; i < answer.length; i++) {
        bw.write(answer[i] + " ");
    }
    bw.flush();
  }

//   public static void main(String[] args) throws IOException {
//     BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//     BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
//     StringTokenizer st = new StringTokenizer(br.readLine());

//     String s = st.nextToken();
//     String t = st.nextToken();

//     String[] arr = s.split(t);

//     // System.out.println(String.valueOf(arr[1]));

//     for (String x : arr) {
//         if (x.length() % 2 == 0) {
//             // x의 길이가 짝수
//             for (int i = 1; i <= x.length() / 2; i++) {
//                 bw.write(String.valueOf(i) + " ");
//             }
//         }
//         else {
//             for (int i = 1; i <= x.length() / 2 + 1; i++) {
//                 bw.write(String.valueOf(i) + " ");
//             }
//         }
//         for (int i = x.length() / 2; i >= 1; i--) {
//             bw.write(String.valueOf(i) + " ");
//         }
//         bw.write(String.valueOf(0) + " ");
//     }
//     bw.flush();
//   }
}