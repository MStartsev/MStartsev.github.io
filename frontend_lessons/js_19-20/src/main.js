$( function() {
	consLog('data JSON', data);

var skills = _.sortBy(
								_.map(
									_.uniq(
										_.flattenDeep(
											_.map(data,'skills')
										)
									),
								_.toLower)
							);

consLog('Массив скиллов (поле skills) всех людей, не должно быть повторяющихся скиллов, так же они должны быть отсортированы по алфавиту', skills);

var namesSort = _.map(
									_.sortBy(
										_.map(data, function(e) {
											return { "name": e.name, "friends": e.friends};
										}),
									'friends.length'),
								'name');

consLog('Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей', namesSort);

var friendsSort = _.uniq(
										_.sortBy(
											_.flattenDeep(
												_.map(
													_.map(data, function(e) {
														return {"name": _.map(e.friends, "name")};
													}),
												'name')
											)
										)
									);

consLog('Массив всех друзей всех пользователей, не должно быть повторяющихся людей', friendsSort);


	function consLog(name, arg) {
		var winWidth =  window.outerWidth;
				winWidth -= 175;
		var winLine = '-';

		while (winWidth > 0) {
			winLine = winLine + '-';
			winWidth -= 8;
		}

		console.log (name,':  ', arg);
		console.log (winLine);
	}

});