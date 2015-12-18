var expect = require('chai').expect;

describe('typeof operator', function () {
	it('typeof NaN is number', function () {
		expect(typeof NaN).to.equal(typeof 4);
	});

	it('typeof null is object', function () {
		expect(typeof null).to.equal(typeof {});
	});
});
