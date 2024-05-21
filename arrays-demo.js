// ARRAYS

let array = []; // this is an empty array
console.log(array);

// Arrays work off of INDEXes
// aka, position of an array item

let arrayIndex = ['first-item', 'second-item', 'third-item'];

console.log(arrayIndex[0]); // array item at position 0 (to get first-item)
console.log(arrayIndex[2]); // array item at position 2 (to get third-item)

// Add item to an array using indexes
console.log(array[0]);
array[0] = 'new-item';
array[1] = 42;
array[2] = [1, 3, 5, 7, 9]; // can even store arrays
array[3] = false;
array[4] = 42 < 55; // when run, it'll evaluate it (output is true)
console.log(array);

// a method is a function that is built in to a specific piece of data

// PUSH AND POP deals with the END of the array
// stack = array that only uses push and pop

// push function - adds something into the array, puts it on the end
let array_number = [10, 20, 30, 40];
array_number.push(50);
array_number.push(100);
console.log(array_number);
// output: [10, 20, 30, 40, 50, 100]

// pop function - removes the last thing in the array and returns the value
// (you dont need a value)
let new_array = [10, 20, 30];
new_array.pop();
console.log(new_array);
// output: [10, 20]

// UNSHIFT AND SHIFT - deals with FRONT of array (opposite of push/pop)

// unshift adds item to beginning of array
new_array.unshift('Hello');
console.log(new_array);
// shift removes first item from array
new_array.shift();
console.log(new_array);

/* EXAMPLES OF PUSH/POP and UNSHIFT/SHIFT
Stack -> deck of playing cards -> removing card 
Queue -> people in a line -> 
    Push can have new people arriving to go to back of the line
    Shift can remove people from front of the line to be serviced
*/

// SLICE AND SPLICE //

// Slice is used to take a piece of the array and show you a copy
let numbers = [1, 2, 3, 4];
let slicedNumbers = numbers.slice(1, 3);
console.log(slicedNumbers);
//output numbers = [2,3]

// Splice
let numbs = [1, 2, 3];
let removedNumbs = numbs.splice(0, 1);
console.log(numbs);
console.log(removedNumbs);
numbs.splice(0, 1, 10, 20);
console.log(numbs);
/* output numbers = 
[2,3]
[1] 
[10, 20, 30]
*/
