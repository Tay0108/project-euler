'use strict';

function checkCollatzLength(number) {
    let length;

    for (length = 1; number > 1; length++) {
        if (number % 2 === 0) {
            number = number / 2;
        } else {
            number = 3 * number + 1;
        }
    }

    return length;
}

let longestCollatzNumber = 1;
let longestCollatzNumberLength = 1;


for (let i = 0; i < 1000000; i++) {
    let currentLength = checkCollatzLength(i);
    
    if (currentLength > longestCollatzNumberLength) {
        longestCollatzNumberLength = currentLength;
        longestCollatzNumber = i;
    }
}

console.log(longestCollatzNumber);
