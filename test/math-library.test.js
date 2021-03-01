const chai                  = require('chai');
const expect                = chai.expect;
const MathLibrary           = require('../models/math-library');

//Test add operation
describe("Math Library: Add", function(){

    it("should be able to add two positive numbers.", function(){
        let math = new MathLibrary();
        let result = math.add(25, 5);
        expect(result).to.equal(30);
    });

    it("should be able to add two negative numbers.", function(){
        let math = new MathLibrary();
        let result = math.add(-25, -5);
        expect(result).to.equal(-30);
    });

    it("should be able to add two different signed numbers.", function(){
        let math = new MathLibrary();
        let result = math.add(-25, 5);
        expect(result).to.equal(-20);
    });

});

//Test multiply operation
describe("Math Library: Multiply", function(){

    it("should be able to multiply two positive numbers.", function(){
        let math = new MathLibrary();
        let result = math.multiply(25, 4);
        expect(result).to.equal(100);
    });

    it("should be able to multiply two negative numbers.", function(){
        let math = new MathLibrary();
        let result = math.multiply(-25, -4);
        expect(result).to.equal(100);
    });

    it("should be able to multiply two different signed numbers.", function(){
        let math = new MathLibrary();
        let result = math.multiply(-25, 4);
        expect(result).to.equal(-100);
    });

});

//Test square operation
describe("Math Library: Square", function(){

    it("should be able to square positive number.", function(){
        let math = new MathLibrary();
        let result = math.square(3);
        expect(result).to.equal(9);
    });

    it("should be able to square negative number.", function(){
        let math = new MathLibrary();
        let result = math.square(-3);
        expect(result).to.equal(9);
    });

});

//Test random operation
describe("Math Library: Random", function(){

    it("should be able to get random number from positive numbers", function(){
        let math = new MathLibrary();
        let min = 5, max = 10;
        let result = math.random(min, max);

        expect(result).to.not.be.above(max);
        expect(result).to.not.be.below(min); 
    });

    it("should be able to get random number from negative numbers", function(){
        let math = new MathLibrary();
        let min = -10, max = -1;
        let result = math.random(min, max);

        expect(result).to.not.be.above(max);
        expect(result).to.not.be.below(min); 

    });

    it("should be able to get random number from different signed numbers", function(){
        let math = new MathLibrary();
        let min = -10, max = 1;
        let result = math.random(min, max);

        expect(result).to.not.be.above(max);
        expect(result).to.not.be.below(min); 
    });
});

//Test subtract operation
describe("Math Library: Subtract", function(){

    it("should be able to subtract two positive numbers.", function(){
        let math = new MathLibrary();
        let result = math.subtract(25, 5);
        expect(result).to.equal(20);
    });

});