// Needs for performance tools
const { JSDOM } = require("jsdom")
const { window } = new JSDOM()

// Simple fibonacci calculator
const fibSimple = n => {
  if (n <= 1 ) return n;

  let prev = 0;
  let current = 1;
  for (let i = 0; i < n - 1; i++) {
    let temp = current;
    current = current + prev;
    prev = temp;
  }
  return current;
};

// recursive Fib(n);
const fibRecursive = n => {
  if (n <=2) return 1;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
};

// recursive Fib(n) but very efficient. Store the previous calculated values in an object.
const fibMemory = (n, mem = {}) => {
  if(n in mem) return mem[n];
  if (n <=2) return 1;
  mem[n] = fibMemory(n - 1, mem) + fibMemory(n - 2, mem);
  return mem[n];
};

// fib target element
let n = 100;

let start = window.performance.now();

switch (1) {
  case 1:
    console.log(fibSimple(n));
    break;
  case 2:
    console.log(fibRecursive(n));
    break;
  case 3:
    console.log(fibMemory(n));
    break;
  default:
    console.log("Please specify a valid method: simple = 1, recursive = 2, or memo = 3");
}

let end = window.performance.now();
console.log(`Time: ${(end - start)} milliseconds`);
