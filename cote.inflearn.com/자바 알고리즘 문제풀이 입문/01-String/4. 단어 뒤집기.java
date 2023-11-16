import java.util.*;
import java.io.*;
  
public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    int N = Integer.parseInt(br.readLine());

    for (int i = 0; i < N; i++) {
        String tmp = br.readLine();
        String revers = new StringBuilder(tmp).reverse().toString(); // * StringBuilder

        // * 왜 String이라는 객체가 있음에도, StringBuilder를 따로 만들어 지원할까?
        // String은 String끼리 더하거나, 수정하거나, 이려면.. -> 새로운 객체가 생성됨
        // String은 원래 불변해야 함. 하나의 객체를 만들어 놓으면, 그 값을 변경할 수 없음.
        // 그래서, 새로운 객체로 만들어 진 애를 다시 대입. 이런 방식으로 하다보니..
        // 자꾸 새로운 객체가 만들어짐
        // 근데? StringBuilder는 객체 한 번 만들고 나서, 뭘 추가하거나 뭘 어쩌구 저쩌고 해도
        // 객체 하나만 가지고 가니까.. 무겁지 않음
        // -> 따라서, String 연산이 많아지면 StringBuilder를 쓰기도 함

        System.out.println(revers);
    }
  }
}