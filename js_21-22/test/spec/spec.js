var app = require('../js/funPow.js');

describe("app", function() {
	it("base 1, exp 0", function() {

		//prepare
		var result;

		//act
		result = app(1, 0);

		//assert
		console.log ('base 1, exp 0');
		expect(result).toBe(1);
	}); 
});

describe("app", function() {
	it("base 1, exp 1000000", function() {

		//prepare
		var result;

		//act
		result = app(1, 1000000);

		//assert
		console.log ('base 1, exp 1000000');
		expect(result).toBe(1);
	});
});

describe("app", function() {
	it("base -1, exp 1", function() {

		//prepare
		var result;

		//act
		result = app(-1, 0);

		//assert
		console.log ('base -1, exp 1');
		expect(result).toBe(1);
	});
});