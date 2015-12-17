// Douglas Crockford gave us some of the good parts,
// now let me introduce some of the bad ones :)
var expect = require('chai').expect;

describe('typeof operator', function () {
  it('typeof NaN is number', function () {
  	expect(typeof NaN).to.equal(typeof 4);
  });
  it('typeof null is object', function () {
  	expect(typeof null).to.equal(typeof {});
  });
});

describe('void operator', function () {
	it('void takes an operand and returns undefined', function () {
		expect(void 1).to.equal(undefined); // number
		expect(void "void").to.equal(undefined); // string
		expect(void {}).to.equal(undefined); // object
		expect(void /coffee/g).to.equal(undefined); // regex
		expect(void [1, 2, 3]).to.equal(undefined); // array with elements
	});
});

describe('double equals operator', function () {
	it('\'\' and 0 weirdness', function () {
		expect('' == '0').to.be.false;
		expect(0 == '').to.be.true;
		expect(0 == '0').to.be.true;
	});
	it('false, null, and undefined', function () {
		expect(false == undefined).to.be.false;
		expect(false == null).to.be.false;
		expect(null == undefined).to.be.true;
	});
});

describe('scoping rules', function () {
	it('function scoping, not block scoping', function () {
		// var cheese;
		try { 
			// a random block
			var cheese = 'Old Amsterdam';
		} catch (err) {}
		// exited try/catch block but since the variable declaration
		// was hoisted to top of this function, variable still exists
		expect(cheese).to.equal('Old Amsterdam');
	});
});
