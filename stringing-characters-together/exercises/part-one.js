let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
console.log(num.toString().length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let decNum = 123.45
console.log(decNum.toString().length - 1);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
function lengthOfNum(number) {
    if (Number.isInteger(number)) {
        console.log(number.toString().length);
        return number.toString().length;
    } else {
        console.log(number.toString().length - 1);
        return number.toString().length - 1;
    }
}

// lengthOfNum(123879879870);
// lengthOfNum(1.47643);