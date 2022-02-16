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
fibFast = (n, mem = {}) => {
  if(n in mem) return mem[n];
  if (n <=2) return 1;
  mem[n] = fibFast(n - 1, mem) + fibFast(n - 2, mem);
  return mem[n];
};


let n = 20;

// console.log(slowFib(n));
// console.log(fib(n));
console.log(fibFast(n));
