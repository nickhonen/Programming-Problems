// Problem 2

function evenFib() {
    // helper function to do fibonacci
    const fib = function(n) {
        if (n <= 1) {
            return n;
        }
    return fib(n-1) + fib(n-2);
}
let sum = 0;
    for (let i = 0; fib(i) < 4000000; i++) {
        if (fib(i) % 2 === 0) {
            sum += fib(i)
        }
    }
    return sum;
}

console.log(evenFib());

/* Refactor later looked at solution, extra challenge is
to avoid the testing for even num. Apparently
E(n) = 4 * E(n-1)+E(n-2) 
try and make a solution with this next time

Also I could've solved this nonrecursively but and just added
an extra limit variable, and setting a var = 1 and another = 0 and just
updating them after ever iteration of a while loop