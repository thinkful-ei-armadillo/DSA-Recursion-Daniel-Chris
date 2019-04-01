# Recursion

"To understand recursion you must first understand recursion"

* A recursive method is one that calls itself.

````js
const countDown = function (some parameters) {
    // other logic that the function should perform

    countDown(some other parameters);
};

countDown(5);
````

* Used for working with self-similar problems
  * Recursion is used for tasks that can be defined as similar subtasks
* Recursion reduces a problem to smaller, similar problems that can be solved more easily than the larger problem.

Write a function that counts down:
````js
const countDown = function (num) {
  // base case
  if (num === 1) {
    return 1 + ' all done!';
  }
  return num + countDown(num-1);
};
````

## Recursive Function Structure

* all recursive functions have two different conditions to deal with
  * base cases:
    * the stopping conditions
  * the recursive case:
    * the continuing condition
    * in this case, the function calls itself to solve a smaller problem then use that solution to solve the complete problem

* what happens when you forget the base case?
  * forgetting the base case will result in infinite recursion and the function will never complete

* each recursive calls address a subtask that is smaller than the previous
* these recursive calls converge to the base case

## Base Cases

* think of the simplest sensible thing for the data type
* integer
  * what if the number is zero?
  * what if the number is one?
* string
  * what if a string has no characters?
  * what if a string only has one character?
* array
  * what if the array is empty?
  * what if the array only has one item?

## Recursive Cases

* How can I express the solution to the problem in terms of the problem itself?
* imagine that you already have a working version of the function
* reduce the problem so you reach one of the base cases

## REMEMBER

* there must be a reachable base case where the function stops calling itself
* the argument of the function must be modified with each call
* the function does not return the outcome until all recursive calls are finished
* a recursive call returns to the recursive function that called it

## Carrying Data through Recursions

````js
function upperStr(str){
  if (str === "") {
    return "";
}
  const newChar = str[0].toUpperCase();

  // Concatenate new data with reduced string for next iteration...
  return newChar + upperStr(str.slice(1)); 
}
upperStr('hello');
````
* converting string chars into upper case by slicing it out of str and storing it into newChar
* base case is when the str is empty
* recursive case returns together the new uppercase char and the remaining str

## Double values of an array with recursion

````js
function doubleArr(arr) {

}

````

### what does this do?

````js
const isValid = function(str, open=0) {
    if (str.length === 0) {
        return open === 0;
    }
    if (open < 0) {
        return false;
    }
    const char = str.charAt(0);
    if (char === '(') {
        open++;
    }
    if (char === ')') {
        open--;
    }
    return isValid(str.slice(1), open);
};
console.log(isValid('(((())))'));
````

* this function is verifying that each opened bracket is closed.

````js
const filter = function(arr, predicate){
    //base case
    if (!arr.length){
        return [];
    }
    if (predicate(arr[0])) {
        return [arr[0], ...filter(arr.slice(1), predicate)];
    }
    return filter(arr.slice(1), predicate);
};

let arr = [10,5,6,3,8];
console.log(filter(arr, x => x < 7));
````
* this function is removing all data types from the array that do not meet a given condition.
* in the example, it tests to see if the numbers are less than 7, and only keeps them in the array if they meet that condition.


