public class Solution {

    public static int reverseNumber(int n) {
        int reversed = 0;

        while (n > 0) {
            reversed = reversed * 10 + n % 10;
            n = n / 10;
        }
        return reversed;
    }

    public static boolean isPalindrome(int n) {
        return n == reverseNumber(n);
    }

    public static void main(String[] args) {

        int max = 0;

        for (int i = 999; i > 99; i--) {
            for (int j = i; j > 99; j--) {
                if (isPalindrome(i * j)) {
                    if(max < i * j) {
                        max = i * j;
                    }
                }
            }
        }

        System.out.println(max);
    }

}
