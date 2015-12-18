var expect = require('chai').expect;

describe('Array.prototype.sort', function () {
    it('sorts numbers by first digit only', function () {
    	expect([5, 6, 1, 10].sort()).to.deep.equal([1, 10, 5, 6]);
    });
});