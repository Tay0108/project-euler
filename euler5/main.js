function isEvenlyDivisible(number, limit) {

    for(let i=11;i<=limit; i++) {
        if(number % i != 0) return false;
    }

    return true;
}


let smallestResult = 2520;
let limit = 20;

for (;!isEvenlyDivisible(smallestResult, limit); smallestResult++);
console.log(smallestResult);

// I hardcoded 11 into function since numbers 1-10 and be ommited (if number is divisible by 18 it is also by 9, 6, 4, 3, 2 and so on)
