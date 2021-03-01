/*
    This file contains the operations 
    that will be tested later in unit testing.
*/

class MathLibrary {
    add(num1, num2) { 
        return num1 + num2;
    };
    subtract(num1, num2) {
        return num1 - num2;
    }
    multiply(num1, num2) {
        return num1 * num2;
    };
    square(num) {
        return num * num;
    };
    random(num1, num2) {
        return Math.floor(Math.random() * (num2 - num1) + num1);
    }
}


module.exports = MathLibrary;