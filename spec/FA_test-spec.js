var chai = require('chai');
chai.should();

var FA = require('spec/FA_test-spec.js');

describe('Factorial Algorithm', function () {

  it('should be a function', function () {
    factorial.should.should.be.a("function");
  });

  it('should take a number as an argument and return a number', function () {
    factorial('a').should.throw(error);
    factorial('4').should.should.be.a("number");

  });

  it('should return the factorial of an input number', function () {
    factorial(5).should.equal(120);
    factorial(6).should.equal(720);
    factorial(1).should.equal(1);
    factorial(2).should.equal(2);
  });

  it('should return zero if given a negative number', function () {
    factorial(-1).should.equal(0);
    factorial(-5).should.equal(0);
  });

});
