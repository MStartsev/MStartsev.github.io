userBase();

function userBase() {

	var userList = [];
	userList.length = 4;

	for (var i = 0; i < userList.length; i++) {
		userList[i] = prompt ('Please input username for database:', userList[i]);
	}

	var userLogIn = prompt ('Please input username for login:', userLogIn);

	for (var i = 0; i <= userList.length; i++) {

		if (userLogIn == userList[i]) {
			return alert ('Hello! ' + userLogIn + ', you have successfully logged!');
		}	

	}

	return alert ('Username ' + userLogIn + ' Not Found!!!   Error: 401 Unauthorized');

}