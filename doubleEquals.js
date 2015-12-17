var expect = require('chai').expect;

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