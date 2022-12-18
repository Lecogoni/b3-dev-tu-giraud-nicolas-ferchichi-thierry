const Calc = require('../src/app').Calcultrice;
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('A. User input', function() {
    
    beforeEach(function() {
        // Initialise l'application avant chaque test
        app = new Calc();
    });

    it('1. Check the inputArray is empty at start', function(done) {
        let expected = []
        assert.deepEqual(app.inputArray, expected);
        done();
    });
    
    it('2. Verify the result of the user input once sorted is an array', function(done) {
        assert.typeOf(app.inputArray, 'array')
        done();
    });
        
    it('3. Verify the sort method', function(done) {
        let expected = [23,'+',5]
        app.sortUserInput('23+5');
        assert.deepEqual(app.inputArray, expected);
        done();
    });

    it('4. When the operation is invalid then we receive a message : NaN', function(done) {
        let error = NaN;
        app.sortUserInput('a+5');
        assert.deepEqual(app.sortUserInput('a+5'), error);
        done();
    });
    
});


describe('B. Calculate', function() {

    describe('Add',function() {
        beforeEach(function() {
            // Initialise l'application avant chaque test
            app = new Calc();
        });
    
        it ('1. Test the add function between 2 positive numbers', function(done) {
            expect(app.add(1,2)).to.equal(3);
            done();
        });
    
        it ('2. Test the add function between 1 positive number and 1 negative number ', function(done) {
            expect(app.add(3,-2)).to.equal(1);
            done();
        });
    
        it ('3. Test the add function between 1 positive number and 1 negative number', function(done) {
            expect(app.add(1,-2)).to.equal(-1);
            done();
        });
    });
    
    describe('C. Sub',function() {
        beforeEach(function() {
            // Initialise l'application avant chaque test
            app = new Calc();
        });
    
        it ('1. Test the sub function between 2 positive numbers', function(done) {
            expect(app.sub(47,32)).to.equal(15);
            done();
        });
    
        it ('2. Test the sub function between 1 positive number and 1 negative number ', function(done) {
            expect(app.sub(3,-2)).to.equal(5);
            done();
        });

            
        it ('3. Test the sub function between 1 positive integer and 1 positif float', function(done) {
            expect(app.sub(7, 6.2)).to.equal(0.8);
            done();
        });
    
    });

    describe('D. Multiply',function() {
        beforeEach(function() {
            // Initialise l'application avant chaque test
            app = new Calc();
        });
    
        it ('1. Test the multiply function between 2 positive numbers', function(done) {
            expect(app.multiply(2,12)).to.equal(24);
            done();
        });
    
        it ('2. Test the multiply function between 1 positive number and 1 negative number ', function(done) {
            expect(app.multiply(3,-2)).to.equal(-6);
            done();
        });
    
        it ('3. Test the multiply function between 2 negative numbers', function(done) {
            expect(app.multiply(-4,-2)).to.equal(8);
            done();
        });
    
        it ('3. Test the multiply function between 1 positive integer and 1 positif float', function(done) {
            expect(app.multiply(3, 6.2)).to.equal(18.6);
            done();
        });
    });

    describe('E. Divide',function() {
        beforeEach(function() {
            // Initialise l'application avant chaque test
            app = new Calc();
        });
    
        it ('1. Test the divide function between 2 positive numbers', function(done) {
            expect(app.divide(6,2)).to.equal(3);
            done();
        });
    
        it ('2. Test the divide function between 1 positive number and 1  negative number ', function(done) {
            expect(app.divide(4,-2)).to.equal(-2);
            done();
        });
    
        it ('3. Test the divide function between 1 positive number and 1 positif float number', function(done) {
            expect(app.divide(1,0.5)).to.equal(2);
            done();
        });
    });


    
});
