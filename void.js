var expect = require('chai').expect;

describe('void operator', function () {
	it('void takes an operand and returns undefined', function () {
		expect(void 1).to.equal(undefined); // number
		expect(void "void").to.equal(undefined); // string
		expect(void {}).to.equal(undefined); // object
		expect(void /coffee/g).to.equal(undefined); // regex
		expect(void [1, 2, 3]).to.equal(undefined); // array with elements
	});
});