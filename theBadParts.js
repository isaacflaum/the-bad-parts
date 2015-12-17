// Douglas Crockford gave us some of the good parts,
// now let me introduce some of the bad ones :)
var expect = require('chai').expect;

describe('typeof operator', function() {
  it('typeof NaN is number', function () {
  	expect(typeof NaN).to.equal(typeof 4);
  });

  it('typeof null is object', function () {
  	expect(typeof null).to.equal(typeof {});
  });

});
