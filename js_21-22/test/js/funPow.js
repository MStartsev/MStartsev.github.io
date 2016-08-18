var app = funPow;

try {

	//test
	module.exports = app;

} catch(e) {

	//for browser
	funPow();

}

function funPow(base, exponent) {

	console.log ('Hello! Input only integer exponent!!!');
	var resultPow = 1;

	if (isNaN(base * 1)) {

		do {
			var base = prompt('Please, input number ', base);
			if (base == null) {
			 return console.log ('EXIT');
			}
		} while( isNaN(base * 1) );

	}
	if (isNaN(exponent * 1)) {
		do {
			var exponent = prompt('Please, input exponent ', exponent);
			var remainderExp = exponent % 1;
			var remainderExpStr = remainderExp.toFixed(14) * 1 + '';
			var remExpLength = remainderExpStr.length - 2;
			if (exponent == null) {
			 return console.log('EXIT');
			}
		} while( remExpLength>0 || isNaN(exponent * 1) );
	}

	if (exponent > 0) {

		for (
			var i = 0; i < exponent; i++) {
			resultPow *= base;
			if (resultPow >= 10.0e+999) {
			 return console.log ('resultPow > 10^999');
			}
		} 

	} else {

		for (
			var i = 0; i > exponent; i--) {
			resultPow *= 1/base;
			if (resultPow >= 10.0e-999) {
			 return console.log ( 'resultPow > 10^(-999)' );
			}
		} 
	}

	resultPow = resultPow.toFixed(14) * 1;
	console.log (resultPow);
	return resultPow;
}