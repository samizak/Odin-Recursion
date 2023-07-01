/**
 * The recursive solution to the fibonacci sequence question.
 * @param {number} n : Getting the number of elements
 * @returns The array of elements of the fibonacci sequence
 */
function fibsRec(n) {
  if (n < 1 || isNaN(n)) return "Please enter a valid number of elements to be given an answer.";
  if (n == 1) return [0];
  if (n == 2) return [0, 1];

  const arr = fibsRec(n - 1);
  return [...arr, arr[n - 2] + arr[n - 3]];
}

console.log(fibsRec(0)); // []
console.log(fibsRec(1)); // [0]
console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
