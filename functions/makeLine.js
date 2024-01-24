const input = require('readline-sync');

function makeLine(size, newChar) {
    let count = 1;
    let line = '';
    let char = '#';
    if (newChar) {
        char = newChar;
    }
    while (count <= size) {
        line += char;
        count ++;
    }
    return line;
}

// console.log(makeLine();

function makeSquare(size) {
    let square = makeLine(size);
    for (let i = 0; i < size - 1; i++) {
        square += '\n' + makeLine(size);
    }
    return square;
}

// console.log(makeSquare(5));

function makeRectangle(width, height, newChar) {
    if (newChar) {
        let row = makeLine(width, newChar);
        let rectangle = row
        for (let i = 0; i < height - 1; i ++) {
            rectangle += '\n' + row;
        }
        return rectangle;
    } else {
        let row = makeLine(width);
        let rectangle = row
        for (let i = 0; i < height - 1; i ++) {
            rectangle += '\n' + row;
        }
        return rectangle;
    }
}

// console.log(makeRectangle(9, 3, 'n'));

function makeDownwardStairs(height, newChar) {
    if (height <= 0) {
        return '';
    } else if (newChar) {
        stairs = newChar;
        for (let i = 2; i <= height; i ++) {
            stairs += '\n' + makeLine(i, newChar);
        }
    } else {
        stairs = '#';
        for (let i = 2; i <= height; i ++) {
            stairs += '\n' + makeLine(i);
        }
    }
    return stairs;
}

// console.log(makeDownwardStairs(6, '*'));

function makeSpaceLines(numSpaces, numChars, newChar) {
    let spaces = '';
    let chars = '';
    if (newChar) {
        chars = makeLine(numChars, newChar);
    } else {
        chars = makeLine(numChars);
    }
    for (let i = 0; i < numSpaces; i ++) {
        spaces += ' ';
    }
    return spaces + chars + spaces;
}

// console.log(makeSpaceLines(6, 5, '='));

function makeIsoscelesTriangle(height, newChar) {
    let triangle = '';
    if (newChar) {
        triangle = makeSpaceLines(height - 1, 1, newChar);
        for (let i = 1; i < height; i++) {
            triangle += '\n' + makeSpaceLines(height - i - 1, 2 * i + 1, newChar);
        }
        return triangle;
    } else {
        triangle = makeSpaceLines(height - 1, 1);
        for (let i = 1; i < height; i++) {
            triangle += '\n' + makeSpaceLines(height - i - 1, 2 * i + 1);
        }
        return triangle;
    }
}

// console.log(makeIsoscelesTriangle(6, '^'));

function makeDiamond(height, newChar) {
    let triangle = '';
    if (newChar) {
        triangle = makeIsoscelesTriangle(height, newChar);    
    } else {
        triangle = makeIsoscelesTriangle(height);
    }
    // Invert 'triangle' and place it one below existing 'triangle', creating a diamond.
    let diamond = triangle + '\n' + triangle.split('').reverse().join('');
    return diamond;
}

// console.log(makeDiamond(5, '+'));