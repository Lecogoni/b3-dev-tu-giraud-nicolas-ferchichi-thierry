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

