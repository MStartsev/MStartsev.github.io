$(function(){

	var html = $('#list-template').html();
	var tmpl = _.template(html);

	var userData = [{
		userFirstName: 'Ivanka',
		userLastName: 'Ivanova',
    userIcon: 'img/bird.png',
    userPosition: 'University student zaborostroitelnogo',
    userDescription: 'I want to learn the front-end, because:',
    userDescriptionParagraph_1: 'I do not want to build fences',
    userDescriptionParagraph_2: 'Money is tight',
    userDescriptionParagraph_3: 'I do not want to work on the street',
    userTel: '+123456789000',
    fidbek: 'If necessary, I can build you a fence'
    }];

	$('body').append(tmpl({data: userData[0]}));

});