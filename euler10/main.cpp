#include <iostream>

using namespace std;

bool is_prime(int n) {
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0)
            return false;
    }
    return true;
}

int main() {
    long long int sum = 0;
    for (int i = 2; i < 2000000; i++) {
        if (is_prime(i))
            sum = sum + i;
    }
    cout << sum;
    return 0;
}
