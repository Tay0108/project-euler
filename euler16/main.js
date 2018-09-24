'use strict';

const n = 1000;

function digitSum(n) {

    let digitArray = [];

    digitArray.push(2);

    for (let i = 1; i < n; i++) {
        digitArray = digitArray.map(element => 2 * element);

        for (let j = 0; j < digitArray.length; j++) {

            if (digitArray[j] >= 10) {

                let total = Math.floor(digitArray[j] / 10);

                if (j + 1 < digitArray.length) {
                    digitArray[j + 1] += total;
                }
                else {
                    digitArray.push(total);
                }

                digitArray[j] = digitArray[j] % 10;
                
            }
        }
        //console.log(digitArray);
    }

    let sum = digitArray.reduce((total, num) => total + num);
    return sum;
}

console.log(digitSum(n));
