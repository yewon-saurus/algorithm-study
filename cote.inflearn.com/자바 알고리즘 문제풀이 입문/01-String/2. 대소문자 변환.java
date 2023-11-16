import java.io.*;
import java.util.*;
  
public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    String input = br.readLine();
    char[] arr = new char[input.length()];
    arr = input.toCharArray();

    String result = "";
    
    for (char i : arr) {
        // * Character.isLowerCase, Character.toUpperCase
        if (Character.isLowerCase(i)) result += Character.toUpperCase(i);
        else result += Character.toLowerCase(i);
    }

    System.out.println(result);
  }
}