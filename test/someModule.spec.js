var expect    = require('chai').expect;
var someModule = require('../js/someModule.js');

describe('someModule', function() {

  it('should return string "It works!"', function() {
    expect(someModule.someMethod()).to.equal('It works!');
  });

});
