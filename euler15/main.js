'use strict';

let n = 20; // length of square

// rozw, rekurencyjne:

/* let direction;

 function findPath(direction, downCounter, rightCounter) {
     if (downCounter == n || rightCounter == n) { 
         availablePaths++;
         return;
     }

     if(direction == 'down') {
         downCounter++; // go down
     }
     else if(direction == 'right') {
         rightCounter++; // go right
     }
     findPath('down', downCounter, rightCounter);
     findPath('right', downCounter, rightCounter);

 }

 findPath('down', 0, 0);
 //findPath('right', 0, 0);


*/

// rozw. iteracyjne: 

let grid = new Array(n + 1);

for (let i = 0; i < n + 1; i++) {
    grid[i] = new Array(n + 1);

    for (let j = 0; j < grid.length; j++) { // wypelnianie zerami i jedynkami na brzegach
        if( i == n && j == n) {
            grid[i][j] = 0;
        }
        else if (i == n || j == n) {
            grid[i][j] = 1;
        } else {
            grid[i][j] = 0;
        }
    }
}

for(let i = n-1; i >= 0; i--) {
    for(let j = n-1; j >= 0; j--) {
        grid[i][j] = grid[i+1][j] + grid[i][j+1];
    }
}

console.log(grid[0][0]);

/*

Short explanation: in point [n+1][n+1] (n is a size of a given square) we have 0 options since we are already at the end.
Therefore we set it to 0. Then on the bottom and right sides on the square we have only one way to go so we set them to 1.
Then we evaluate adjacent points based on those values. And so on until we reach point [0][0] which contains our result.

*/
