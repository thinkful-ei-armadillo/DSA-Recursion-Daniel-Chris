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

// console.log(tri(13));

// STRING SPLITTER

const strSplit = function(str, splitter) {
  const i = str.indexOf(splitter);
  //base case
  if (i < 0) {
    return [str];
  }
  //recursive case
  return [str.slice(0, i), ...strSplit(str.slice(i + 1), splitter)].join('');
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

const factorial = function(num) {
  //base
  if (num === 1) {
    return num * 1;
  }
  //recursive
  return num * factorial(num - 1);
};

console.log(factorial(6));

// MAZE 1

let mazeArr = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function GetOut(maze) {

  const path = function(column, row) {
    let pathTaken = [];
    //base
    if (maze[column][row] === 'e') {
      console.log(pathTaken);
      return `You have made it out of the maze at column ${column} and row ${row}!`;
    }
    // recursive
    else if (maze[column][row] === ' ') {
      console.log('Currently at column ' + column + ' and row ' + row + '.');

      maze[column][row] = 7;

      if (column < maze.length - 1 && maze[column][row] !== '*') {
        console.log('R');
        pathTaken.push('R');
        path(column + 1, row);
      }
      if(row < maze[column].length - 1) {
        console.log('D');
        pathTaken.push('D');
        path(column, row + 1);
      }
      if(maze[column][row] === '*' && maze[column - 1][row + 1] !== '*') {
        console.log('LD');
        pathTaken.push('LD');
        path(column - 1, row + 1);
      }
      if(maze[column][row] === '*' && pathTaken[pathTaken.length - 1] === 'D') {
        console.log('U');
        pathTaken.push('U');
        path(column, row - 1);
      }
    }
  };
  path(0,0);
}

// console.log(GetOut(mazeArr));

// ANAGRAMS

const anagrams = function(word) {
  let results = [];
  //base
  if (word.length <= 1) {
    return [word];
  }
  
  //recursive
  const stringArray = word.split('');
  stringArray.forEach((letter, index) => {
    let charLeft = [...stringArray.slice(0, index), ...stringArray.slice(index + 1)].join('');
    const innerPermuations = anagrams(charLeft);
    innerPermuations.forEach(permutation => {
      results.push(letter + permutation);
    });
  });
  return results;
};

// console.log(anagrams('hello'));

// ORG CHART

const facebook = [
  { name: 'Zuckerbug', boss: null },
  { name: 'Schroepfer', boss: 'Zuckerbug' },
  { name: 'Schrage', boss: 'Zuckerbug' },
  { name: 'Sandberg', boss: 'Zuckerbug' },
  { name: 'Bosworth', boss: 'Schroepfer' },
  { name: 'Zhao', boss: 'Schroepfer' },
  { name: 'Steve', boss: 'Bosworth' },
  { name: 'Kyle', boss: 'Bosworth' },
  { name: 'Andra', boss: 'Bosworth' },
  { name: 'Richie', boss: 'Zhao' },
  { name: 'Sofia', boss: 'Zhao' },
  { name: 'Jen', boss: 'Zhao' },
  { name: 'VanDyck', boss: 'Schrage' },
  { name: 'Sabrina', boss: 'VanDyck' },
  { name: 'Michelle', boss: 'VanDyck' },
  { name: 'Josh', boss: 'VanDyck' },
  { name: 'Swain', boss: 'Schrage' },
  { name: 'Blanch', boss: 'Swain' },
  { name: 'Tom', boss: 'Swain' },
  { name: 'Joe', boss: 'Swain' },
  { name: 'Goler', boss: 'Sandberg' },
  { name: 'Eddie', boss: 'Goler' },
  { name: 'Julie', boss: 'Goler' },
  { name: 'Annie', boss: 'Goler' },
  { name: 'Hernandez', boss: 'Sandberg' },
  { name: 'Rowi', boss: 'Hernandez' },
  { name: 'Inga', boss: 'Hernandez' },
  { name: 'Morgan', boss: 'Hernandez' },
  { name: 'Moissinac', boss: 'Sandberg' },
  { name: 'Amy', boss: 'Moissinac' },
  { name: 'Chuck', boss: 'Moissinac' },
  { name: 'Vinni', boss: 'Moissinac' },
  { name: 'Kelley', boss: 'Sandberg' },
  { name: 'Eric', boss: 'Kelley' },
  { name: 'Ana', boss: 'Kelley' },
  { name: 'Wes', boss: 'Kelley' }
];

const orgChart = function(arr, boss, level) {
  let str = '';

  arr.filter(person => person.boss === boss).forEach(person => {
    str = str + ' ' + ' '.repeat(level * 4) + person.name + orgChart(arr, person.name, level + 1);
  });
  return str;
};

// console.log(orgChart(facebook, null));

// BINARY REP

const binaryConv = function(num) {
  //base
  if (num < 1) {
    return '';
  }
  //recursive
  return binaryConv(num/2) + Math.floor(num % 2);
};

// console.log(binaryConv(25));