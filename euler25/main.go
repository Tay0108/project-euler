package main

import (
	"fmt"
	"math/big"
)

func main() {
	// Initialize limit as 10^999, the smallest integer with 1000 digits.
	var limit big.Int
	var answer int
	limit.Exp(big.NewInt(10), big.NewInt(999), nil)
	var next big.Int
	prev1 := big.NewInt(1)
	prev2 := big.NewInt(1)
	// we set i to 3 because first & second terms are already set as prevs, next is 3rd:
	for i := 3; next.Cmp(&limit) == -1; i++ {
		next.Add(prev1, prev2)
		prev1.Set(prev2)
		prev2.Set(&next)
		answer = i
	}
	fmt.Println(answer)
}
