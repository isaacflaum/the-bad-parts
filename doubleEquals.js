var expect = require('chai').expect;

describe('double equals operator', function () {
	it('0, \'\',  and \'0\' transitivity problems', function () {
		expect('' == '0').to.be.false;
		expect(0 == '').to.be.true;
		expect(0 == '0').to.be.true;
	});
	
	it('false, null, and undefined transitivity problems', function () {
		expect(false == undefined).to.be.false;
		expect(false == null).to.be.false;
		expect(null == undefined).to.be.true;
	});

	//this is also true with the triple equals operator
	it('NaN does not equal itself', function () {
		expect(NaN).to.not.equal(NaN);
		expect(NaN != NaN).to.be.true;
	});
});