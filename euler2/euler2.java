public class euler2 {

    public static int fib(int n) {
        if (n==1)
            return 1;
         else if (n==2)
            return 2;
         else
            return (fib(n-1))+(fib(n-2));
    }


    public static void main(String[] args) {
       int suma = 0;
        for (int i = 1; fib(i) < 4000000; i++) {
            if (fib(i)%2==0) {
                suma += fib(i);
            }
        }
        System.out.println(suma);

    }
}
