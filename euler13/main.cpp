#include <iostream>
#include <fstream>
#include <stdlib.h>

using namespace std;

int main() {

    ifstream in("data.txt");

    string line;
    int cur;
    int sum = 0;
    string number;

    for (int i = 49; i > 0; i--) {

        while (getline(in, line)) {
            cur = (int)line[i];
            sum += cur;
        }
        number =
            sum = 0;
    }

    return 0;
}
