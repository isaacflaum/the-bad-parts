var expect = require('chai').expect;

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