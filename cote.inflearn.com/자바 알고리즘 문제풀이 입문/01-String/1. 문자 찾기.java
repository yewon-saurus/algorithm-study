import java.io.*;
  
public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    String str = br.readLine();
    char alph = br.readLine().toLowerCase().charAt(0);

    str = str.toLowerCase();
    int count = 0;
    for (int i = 0; i < str.length(); i++) {
      if (str.charAt(i) == alph) count++;
    }

    System.out.println(String.valueOf(count));
  }
}