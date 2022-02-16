// Simple fibonacci calculator
const slowFib = n => {
  if (n <= 1 ) return n;

  let prev = 0;
  let current = 1;
  for (let i = 0; i < n - 1; i++) {
    let temp = current;
    current = current + prev;
    prev = temp;
  }
  return current;
}

// recursive Fib(n);
const fib = n => {
  if (n <=2) return 1;
  return fib(n - 1) + fib(n - 2);
};

// recursive Fib(n) but very efficient. Store the previous calculated values in an object.
fibFast = (n, memo = {}) => {
  if(n in memo) return memo[n];
  if (n <=2) return 1;
  memo[n] = fibFast(n - 1, memo) + fibFast(n - 2, memo);
  return memo[n];
};


let n = 20;

// console.log(slowFib(n));
// console.log(fib(n));
console.log(fibFast(n));
