function applyToInc(fn, n) { return fn(n+1) }
tripleFn = function(n) { return n * 3 }
applyToInc(tripleFn, 4)

// alternative way to define triple function
function triple(n) { return n * 3 }

// another function for our playground
function plusTwo(n) { return n + 2 }

// even more abstract function handling
function compose(f1,f2) { return (n) => f1(f2(n)) }

// guess the result of the following expressions
// 1. applyToInc(function(n) { return n * 5 }, 4)
// 2. applyToInc((n) => n * 2, 9)   // check out about array functions
// 3. compose(plusTwo,triple)(6)

/*
Challenge:
define the function applyAndSum
which takes a unary, numeric function, and two numeric values, 
and returns the sum of applying the function to the values.
E.g. 
applyAndSum(triple,3,4) should return 21
*/ 
