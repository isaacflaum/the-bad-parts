var expect = require('chai').expect;

describe('parseInt inconsistencies', function () {
	it('numbers with leading zeros default to base 8', function () {
		expect(parseInt(0777)).to.not.equal(parseInt(777));
		expect(parseInt(0777)).to.equal(511);
	});

	it('unexpected behavior with strings', function () {
		expect(parseInt(' 16 cheezburgers')).to.equal(16);
		expect(parseInt('16cheezburgers')).to.equal(16);
	});
});