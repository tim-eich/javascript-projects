const input = require('readline-sync');

function makeLine(size, newChar) {
    let count = 1;
    let line = '';
    let char = '#';     // Default character
    if (newChar) {      // Reassigns char to newChar if the argument was included, uses default otherise
        char = newChar;
    }
    while (count <= size) {
        line += char;
        count ++;
    }
    return line;
}

// console.log(makeLine();

function makeSquare(size, newChar) {
    let square = makeLine(size, newChar);
    for (let i = 0; i < size - 1; i++) {
        square += '\n' + makeLine(size, newChar);
    }
    return square;
}

// console.log(makeSquare(5, '&'));

function makeRectangle(width, height, newChar) {
    let row = makeLine(width, newChar);
    let rectangle = row
    for (let i = 0; i < height - 1; i ++) {
        rectangle += '\n' + row;
    }
    return rectangle;
    }

// console.log(makeRectangle(9, 3, 'n'));

function makeDownwardStairs(height, newChar) {
    stairs = '';
    for (let i = 1; i <= height; i ++) {
        stairs += '\n' + makeLine(i);
    }
    return stairs;
}

// console.log(makeDownwardStairs(6, '*'));

function makeSpaceLines(numSpaces, numChars, newChar) {
    let spaces = '';
    for (let i = 0; i < numSpaces; i ++) {
        spaces += ' ';
    }
    return spaces + makeLine(numChars, newChar) + spaces;
}

// console.log(makeSpaceLines(6, 5, '='));

function makeIsoscelesTriangle(height, newChar) {
    let triangle = makeSpaceLines(height - 1, 1, newChar);
        for (let i = 1; i < height; i++) {
            triangle += '\n' + makeSpaceLines(height - i - 1, 2 * i + 1, newChar);
        }
        return triangle;
}

// console.log(makeIsoscelesTriangle(6, '^'));

function makeDiamond(height, newChar) {
    return makeIsoscelesTriangle(height, newChar) + '\n' + makeIsoscelesTriangle(height, newChar).split('').reverse().join('');
}

console.log(makeDiamond(5))