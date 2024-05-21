// For Loops

/* 
    3 things
        - Initialization (starting values)
        - Condition (how the loop ends) (use boolean)
        - Afterthought (how we get from starting to the end)
*/

// Example: we want to count from 0 to 10, count the numbers.
// Initialization: start at 0
// Condition: we want this loop to run, while the count is not 10
// Afterthought: we want to get to the point where the condition is false

console.log('--Start');
for (let count = 0; count < 10; count += 1) {
  console.log(count);
}
console.log('--End]');

// shorthand for incrementing
let num = 0;
num = num + 1;
num += 1; // same as above
num -= 1;
num *= 2;
num++; // same as +=1, just adds 1 to the number
num--; // same as -=1

/* What is the SUM of all numbers between 42 and 3064 */
/* NOTE: create variable ABOVE code block.
otherwise it doesn't know if it's defined*/
let sum = 0;
for (let start = 42; start <= 3064; start++) {
  sum += start;
}
console.log(sum);

// another example:
function sumBetween(start, end) {
  let total = 0;
  for (let count = start; count <= end; count++) {
    total += count;
  }
  return total;
}

console.log('Fn:', sumBetween(42, 3064));
console.log('Sum of numbers 1 to 100:', sumBetween(1, 100));
