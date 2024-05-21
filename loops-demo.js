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
