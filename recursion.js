'use strict';

// add 
const sumOf = function(list) {
  // Base case
  if (list.length === 1) {
    return list[0];
  }
  // General case
  return list[0] + sumOf(list.slice(1));

};

// let lst = [2,4,6,8,10];
// console.log(sumOf(lst));

const countDown = function (num) {
  // base case
  if (num === 1) {
    return 1 + ' all done!';
  }
  return num + countDown(num-1);
};

// console.log(countDown(5));

function doubleArr(arr) {
  //base
  if (arr.length === 0) {
    return [];
  }
  const first = arr[0] * 2;
  //recursive
  return [first, ...doubleArr(arr.slice(1))];
}

// console.log(doubleArr([2,4,6,10]));

// RECURSION ASSIGNMENT

// What is the input to the program?
// What is the output of the program?
// What is the input to each recursive call?
// What is the output of each recursive call?

// SHEEP COUNT
const sheepJumpCount = function(numOfSheep) {
  //base case
  if (numOfSheep === 0) {
    return 'All sheep jumped over the fence.';
  }
  //general case
  return 'Another sheep jumped over the fence...' + sheepJumpCount(numOfSheep-1);
};

// console.log(sheepJumpCount(7));

// POWER CALCULATOR
const powerCalculator = function(base, exp) {
  // check exp is not negative int
  if (exp < 0) {
    return 'exponent should be >= 0';
  }
  // base case
  if (exp === 1 || exp === 0) {
    return base * 1;
  }
  // general case
  else {
    return base * powerCalculator(base, exp-1);
  }
};

// console.log(powerCalculator(10, 2));

// REVERSE STRING

const revStr = function(str) {
  // base 
  if (str.length === 0) {
    return '';
  }
  const charToEnd = str[str.length - 1];
  // recursive
  return charToEnd + revStr(str.slice(-1));
};

// console.log(revStr('hello'));

// nth triangular number

// STRING SPLITTER

// FIBONNACCI

// FACTORIAL

// MAZE 1

// FIND ALL WAYS OUT OF MAZE

// ANAGRAMS

// ORG CHART

// BINARY REP

// ^^to be done together in group review this afternoon