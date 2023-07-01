/**
 * The non-recursive solution to the fibonacci sequence question.
 * @param {number} n : Getting the number of elements
 * @returns The array of elements of the fibonacci sequence
 */
function fibs(n) {
  let fib = [0, 1];
  if (n <= 0) return "Please enter a valid number of elements to be given an answer.";
  if (n === 1) return [0];
  if (n === 2) return arr;

  for (let i = 2; i < n; i++) fib[i] = fib[i - 2] + fib[i - 1];

  return fib;
}

console.log(fibs(0)); // []
console.log(fibs(1)); // [0]
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
