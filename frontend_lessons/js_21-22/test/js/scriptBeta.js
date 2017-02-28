// degree()

alert( myRoot(9, 3) )

function degree (myNumber,myDegree) {

	var result = 0;
	var negativeNumber = false;
	var negativeDegree = false;
	
	do {
		var myNumber = prompt('Input number ', myNumber);		
	} while( isNaN(myNumber*1) );

	do {
		var myDegree = prompt('Input degree ', myDegree);		
	} while( isNaN(myDegree*1) );

	if (myNumber < 0) {
		myNumber *= -1;
		negativeNumber = true;
	}

	if (myDegree < 0) {
		myDegree *= -1;
		negativeDegree = true;
	}

		var remainderDeg = (myDegree%1);
		var remainderDegStr = remainderDeg.toFixed(14)*1 + '';
		var remDegLength = remainderDegStr.length-2;

		var integerDeg = myDegree - remainderDeg;
		// var integerDegStr = integerDeg.toFixed(0)*1 + '';
		// var intDegLength = integerDegStr.length-2;	

		alert(integerDeg)

	if (myNumber != 0 && myDegree != 0 && remDegLength <= 0) {

		result = myPower(myNumber, integerDeg);
		console.log(result);

	};

	if (myNumber != 0 && myDegree != 0 && remDegLength > 0) {

		var myPowerN = myPower(10, remDegLength);
		result = myPower(myNumber, integerDeg) * myPower( myRoot(myNumber, myPowerN), remainderDeg * myPowerN );

	} else {

		if (myNumber == 0) {
			result = 0;
		}

		if (myDegree == 0) {
			result = 1;
		}

	}
	alert("hello");
	
}

function myPower(base, exponent) {

	var resultPower = 1;
	console.log('Only integers!!!')

	do {
		var base = prompt('Input number ', base);		
	} while( isNaN(myNumber*1) );

	do {
		var myDegree = prompt('Input degree ', myDegree);		
	} while( isNaN(myDegree*1) );

	if (exponent > 0) {

		for (
			var i = 0; i < exponent; i++) {
			resultPower *= base;
		} 

	} else {

		for (
			var i = 0; i > exponent; i--) {
			resultPower *= 1/base;
		} 
	}

	resultPower = resultPower.toFixed(14)*1;
	return resultPower;
}


