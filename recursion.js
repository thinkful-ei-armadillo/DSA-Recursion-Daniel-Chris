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
  const charToEnd = str[0];
  // recursive
  return  revStr(str.slice(1)) + charToEnd;
};

// console.log(revStr('hello'));

// nth triangular number

const tri = function(num) {
  //base
  if (num <= 1) {
    return num;
  }
  //recursive
  return num + tri(num - 1);
};

console.log(tri(1));

// STRING SPLITTER

const strSplit = function(str, splitter) {
  //base case
  if (str.length === 0) {
    return '';
  }
  //recursive case
  const newChar = str[0];
  if (str[0] === splitter) {
    newChar.slice(1);
  }
  return newChar + strSplit(str.slice(1), splitter);
};

// console.log(strSplit('20/20/20', '/'));

// FIBONNACCI

const fibonnacci = function(num) {
  //base
  if (num === 1) {
    return [0, 1];
  }  
  //recursive
  else {
    let result = fibonnacci(num - 1);
    result.push(result[result.length - 1] + result[result.length - 2]);
  
    return result;
  }
};

// console.log(fibonnacci(13));

// FACTORIAL



// MAZE 1

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const getOut = function() {
  // base
  if (maze[0] === 'e') {
    return 'You have made it out of the maze!';
  }
  //recursive
  if (maze[0] === ' ') {
    return getOut
  }
};

// FIND ALL WAYS OUT OF MAZE

// ANAGRAMS

// ORG CHART

// BINARY REP

// ^^to be done together in group review this afternoon