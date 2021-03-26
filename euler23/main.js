"use strict";

const upperLimit = 28123;

function findProperDivisors(n) {
    const properDivisors = [];

    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            properDivisors.push(i);
        }
    }
    return properDivisors;
}

function isAbundant(n) {
    const properDivisors = findProperDivisors(n);
    if (properDivisors.length === 0) {
        return false;
    }
    const sumOfProperDivisiors = properDivisors.reduce((acc, value) => acc + value);

    return sumOfProperDivisiors > n;
}

function sumUpTo(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function findAllAbundantNumbersUpTo(n) {
    const abundantNumbers = [];

    for (let i = 1; i < n; i++) {
        if (isAbundant(i)) {
            abundantNumbers.push(i);
        }
    }
    return abundantNumbers;
}

function forceSolution() {
    const abundantArray = findAllAbundantNumbersUpTo(upperLimit);
    const results = new Set();

    // creating an array with all numbers that are a sum of two abundant numbers:
    for (let i = 0; i < abundantArray.length; i++) {
        for (let j = 0; j < abundantArray.length; j++) {
            if (abundantArray[i] + abundantArray[j] <= upperLimit) {
                results.add(abundantArray[i] + abundantArray[j]);
            }
        }
    }
    const totalSum = sumUpTo(upperLimit);
    const sumOfAbundant = [...results].reduce((acc, value) => acc + value);

    return totalSum - sumOfAbundant;
}

console.log("forceSolution:", forceSolution());
