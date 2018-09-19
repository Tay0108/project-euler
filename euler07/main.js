'use strict';

// Task: What is 10001st prime number?

function isPrime(number) {
    for (let i = 2; i * i <= number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

function findNthPrime(n) {

    for (let i = 1; i <= n; i++) {
        
    }
}

console.log(findNthPrime(10001));
