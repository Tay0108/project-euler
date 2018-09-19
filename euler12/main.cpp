#include <iostream>

using namespace std;

int n_of_divs(int n) {
    int divs = 0;
    int i;
    for (i = 2; i * i < n; i++) {
        if (n % i == 0)
            divs += 2;
    }
    if (i * i == n) {
        divs++;
    }
    return divs + 2;
}

int triangle(int n) {
    int triangle = 0;
    for (int i = 0; i <= n; i++) {
        triangle += i;
    }
    return triangle;
}

int main() {

    cout << n_of_divs(100);
    cout << endl;

    int a = 0;
    int t = 0;

    for (int i = 0; a <= 500; i++) {
        t = triangle(i);
        a = n_of_divs(t);
    }
    cout << t;
    return 0;
}
