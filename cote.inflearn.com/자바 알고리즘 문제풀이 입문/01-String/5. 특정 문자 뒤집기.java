import java.util.*;
import java.io.*;
  
public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader (new InputStreamReader(System.in));

    char[] arr = br.readLine().toCharArray();

    int lt = 0, rt = arr.length - 1;

    while (lt < rt) {
        // * Character.isAlphabetic
        if (!Character.isAlphabetic(arr[lt])) lt++;
        else if (!Character.isAlphabetic(arr[rt])) rt--;
        else {
            // swap
            char tmp = arr[lt];
            arr[lt] = arr[rt];
            arr[rt] = tmp;
            lt++;
            rt--;
        }
    }

    System.out.println(String.valueOf(arr));
    // * String.valueOf(x)
    // : 매개변수로 들어오는 기본형 데이터 x의 배열을 String화
    // 정수가 들어오면 정수도 String화..
  }
}