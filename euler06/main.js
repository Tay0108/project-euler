'use strict';

// task: find (1 + 2 + ... + 100)^2 - (1^2 + 2^2 + ... + 100^2)

function squareOfSum(limit) {
    
    let innerSum = 0;
    let square;

    for(let i = 1; i <= limit; i++) {
        innerSum += i;
    }

    square = innerSum * innerSum;

    return square;
}

function sumOfSquares(limit) {

    let sum = 0;

    for(let i = 1; i <= limit; i++) {
        sum += i*i;
    }

    return sum;
}

let result = squareOfSum(100) - sumOfSquares(100);

console.log(result);
