function makeLine(size) {
    let count = 1;
    let line = '';
    while (count <= size) {
        line += '#';
        count ++;
    }
    return line;
}

// console.log(makeLine(7));

function makeSquare(size) {
    let square = makeLine(size);
    for (let i = 0; i < size - 1; i++) {
        square += '\n' + makeLine(size);
    }
    return square;
}

// console.log(makeSquare(5));

function makeRectangle(width, height) {
    let row = makeLine(width);
    let rectangle = row
    for (let i = 0; i < height - 1; i ++) {
        rectangle += '\n' + row;
    }
    return rectangle;
}

// console.log(makeRectangle(9, 3));

function makeDownwardStairs(height) {
    if (height <= 0) {
        return '';
    } else {
        stairs = '#';
        for (let i = 2; i <= height; i ++) {
            stairs += '\n' + makeLine(i);
        }
    }
    return stairs;
}

// console.log(makeDownwardStairs(6));

function makeSpaceLines(numSpaces, numChars) {
    let spaces = '';
    let chars = makeLine(numChars);
    for (let i = 0; i < numSpaces; i ++) {
        spaces += ' ';
    }
    return spaces + chars + spaces;
}

// console.log(makeSpaceLines(6, 3));

function makeIsoscelesTriangle(height) {
    let triangle = makeSpaceLines(height - 1, 1);
    for (let i = 1; i < height; i++) {
        triangle += '\n' + makeSpaceLines(height - i - 1, 2 * i + 1);
    }
    return triangle;
}

// console.log(makeIsoscelesTriangle(6));

function makeDiamond(height) {
    let triangle = makeSpaceLines(height - 1, 1);
    for (let i = 1; i < height; i++) {
        triangle += '\n' + makeSpaceLines(height - i - 1, 2 * i + 1);
    }
    // Invert 'triangle' and place it one below existing 'triangle', creating a diamond.
    let diamond = triangle + '\n' + triangle.split('').reverse().join('');
    return diamond;
}

console.log(makeDiamond(5));