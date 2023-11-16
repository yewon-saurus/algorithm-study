import java.util.*;
import java.io.*;
  
public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    // String input = br.readLine().toLowerCase().replaceAll("[^a-z\\s]", ""); // 그냥 해 봄
    String input = br.readLine().toLowerCase().replaceAll("[^a-z]", "");
    // * replaceAll 정규식 이용

    String reversed = new StringBuffer(input).reverse().toString();

    String result = "NO";;
    if (input.equals(reversed)) result = "YES";

    System.out.println(result);
  }
}