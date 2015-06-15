var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

var FA = require('../FA.js');

describe('Factorial Algorithm', function () {

  it('should be a function', function () {
    FA.factorial.should.be.a("function");
  });

  it('should take a number as an argument and return a number', function () {
    expect(function(){FA.factorial('a')}).to.throw('you need to give me a number mate');
    FA.factorial(4).should.be.a("number");

  });

  it('should return the factorial of an input number', function () {
    FA.factorial(5).should.equal(120);
    FA.factorial(6).should.equal(720);
    FA.factorial(1).should.equal(1);
    FA.factorial(2).should.equal(2);
  });

  it('should return zero if given a negative number', function () {
    FA.factorial(-1).should.equal(0);
    FA.factorial(-5).should.equal(0);
  });

});