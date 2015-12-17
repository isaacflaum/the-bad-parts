var expect = require('chai').expect;

describe('floating point weirdness', function () {
	it('0.1 + 0.2 does not equal 0.3', function () {
		expect(0.1 + 0.2).to.not.equal(0.3);
	});
});