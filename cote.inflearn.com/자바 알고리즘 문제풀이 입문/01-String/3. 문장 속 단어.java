import java.util.*;
import java.io.*;
  
public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    String input = br.readLine();
    String[] arr = input.split(" "); // * 문자열 split

    int max = 0;
    String best = "";
    for (String x : arr) {
        if (x.length() > max) {
            max = x.length();
            best = x;
        }
    }

    System.out.println(best);
  }
}