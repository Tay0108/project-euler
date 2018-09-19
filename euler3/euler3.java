package com.company;

public class euler3 {

    public static void main(String[] args) {

        int n = 13195;

        boolean tableOfPrimes[] = new boolean[n];
        boolean tableOfFactors[] = new boolean[n];
        for (int i = 0; i < n; i++) {
            tableOfPrimes[i] = true;
            tableOfFactors[i] = false;
        }

        int w;
        for (int i = 2; i < Math.ceil(Math.sqrt(n)); i++) {
            if (tableOfPrimes[i]) {
                w = i*i;
                while (w < n) {
                    tableOfPrimes[w] = false;
                    w += i;
                }
            }
        }

        for (int i = n-1; i > 0; i--) {
            if(tableOfPrimes[i]) {
                if (n%i == 0) {
                    System.out.println(i);
                    break;
                }
            }
        }
    }
}
