var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

var factorialAlgorithm = require('../FA.js');

describe('Factorial Algorithm', function () {

  it('should be a function', function () {
    factorialAlgorithm.factorial.should.be.a("function");
  });

  it('should take a number as an argument and return a number', function () {
    expect(function(){factorialAlgorithm.factorial('a')}).to.throw('you need to give me a number mate');
    factorialAlgorithm.factorial(4).should.be.a("number");

  });

  it('should return the factorial of an input number', function () {
    factorialAlgorithm.factorial(5).should.equal(120);
    factorialAlgorithm.factorial(6).should.equal(720);
    factorialAlgorithm.factorial(1).should.equal(1);
    factorialAlgorithm.factorial(2).should.equal(2);
  });

  it('should return zero if given a negative number', function () {
    factorialAlgorithm.factorial(-1).should.equal(0);
    factorialAlgorithm.factorial(-5).should.equal(0);
  });

});