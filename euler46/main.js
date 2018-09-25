'use strict';

let primes = [2, 3, 5, 7, 11, 13, 17, 19];

function generatePrimesUpTo(n) { // function generates primes smaller than n and one bigger than n if they don't already exist.
    for (let i = primes[primes.length - 1]; primes[primes.length - 1] <= n; i++) {
        let primality = true;

        for (let j = 0; j < primes.length; j++) {
            if (i % primes[j] == 0) {
                primality = false;
                break;
            }
        }
        if (primality) {
            primes.push(i);
        }
    }
}

function isNumberSquareRootable(n) {

    let squareRoot = Math.sqrt(n);

    if (squareRoot != Math.floor(squareRoot)) {
        return false;
    }
    return true;
}

function isNumberGoldbach(n) {

    for (let j = 0; primes[j] <= n; j++) {
        if (isNumberSquareRootable((n - primes[j]) / 2)) {
            console.log(n + "=" + primes[j] + "+2*" + (n - primes[j]) / 2);
            return true;
        }
    }
    return false;
}

function proveGoldbachWrong() {

    let i = 3;
    
    do {
        i += 2;
        generatePrimesUpTo(i);
        if(primes.includes(i)) {
            continue;
        }
    } while (isNumberGoldbach(i));
    return i;
}

console.log(proveGoldbachWrong());
