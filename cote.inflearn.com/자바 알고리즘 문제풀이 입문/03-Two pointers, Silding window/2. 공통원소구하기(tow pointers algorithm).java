import java.util.*;
import java.io.*;
import java.lang.reflect.Array;
  
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        int lenA = Integer.parseInt(br.readLine());
        int[] A = new int[lenA];
        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < lenA; i++) {
            A[i] = Integer.parseInt(st.nextToken());
        }
        
        int lenB = Integer.parseInt(br.readLine());
        int[] B = new int[lenB];
        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < lenB; i++) {
            B[i] = Integer.parseInt(st.nextToken());
        }

        // ArrayList<Integer> answer = new ArrayList<>();
        String answer = "";
        Arrays.sort(A);
        Arrays.sort(B);
        
        int p1 = 0, p2 = 0;
        while (p1 < lenA && p2 < lenB) {
            if (A[p1] == B[p2]) {
                // answer.add(A[p1++]);
                answer += String.valueOf(A[p1++]) + " ";
                p2++;
            }
            else if (A[p1] < B[p2]) p1++;
            else p2++;
        }

        System.out.println(answer);
    }
}