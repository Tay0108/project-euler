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

    let primeCounter = 0;
    let nthPrime;
    
    let i = 2;

    while (primeCounter < n) {
        if(isPrime(i)) {
            primeCounter++;
            nthPrime = i;
        }
        i++;
    }
    
    return nthPrime;
}

console.log(findNthPrime(10001));
