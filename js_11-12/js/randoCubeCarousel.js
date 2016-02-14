 /* responsive 3D carousel */

(function ($) {
	$.fn.randomCubeCarousel = function() {


	/* randomCubeCarousel => rCC */

 
	var	overboard = [];

	$('.randomCubeCarousel')		
		.find('ul')
		.addClass('rCC__cube')
		.find('li')
		.addClass('rCC__img rCC__overboard')
		.find('img')
		.each(function () {

			var arr = $.map(this.attributes, function (attribute) {				
						return attribute.value;
				});

			$(this).parent().css({"background-image": 'url(' + arr[0] +')'});

		});		

	for (var i = 1; i < 7; i++) {
		$overboard(i);
		overboard = [];
	}

	scalePages ();

	$('.randomCubeCarousel')
		.append('<div id="big-image" class="big-image-hide"></div>')
		.find('.rCC__cube li')
		.click(function () {
			var arr = $(this).find('img').attr('src');

			$('#big-image')
			.css({"background-image": 'url(' + arr +')'})
			.show(300);		
			
		})
		.end()

		.find('#big-image')
		.hide()
		.click(function () {
			
			$('#big-image')
			.css({"background-image": ''})
			.hide(300);

		});

	function getRandomInt (max) {
		return Math.floor(Math.random () * max)+1;
	}

	function $overboard (i) {
		$('li.rCC__img.rCC__overboard')
			.each( function () {
				var arr;

				overboard.push(arr);
			})
			.eq(getRandomInt(overboard.length - 1))
			.removeClass('rCC__overboard')
			.addClass('face-of-the-cube_'+ i);
	}

	function $frontRemove (i) {
		$('li.face-of-the-cube_'+ i)
			.removeClass('face-of-the-cube_'+ i)
			.css({
				'-webkit-transform': '',
				'-moz-transform': '',
				'-o-transform': '',
				'-ms-transform': '',
				'transform': ''
			})
			.addClass('rCC__overboard');
	}


	var imageListing = setTimeout (function $imageListing () {

		var i = getRandomInt (6);

		$frontRemove (i);
		$overboard (i);
		overboard = [];
		scalePages ();

		clearTimeout (imageListing);

		var imgListing = setTimeout ($imageListing, 2000);
	}, 2000);

	var rotateCube = setTimeout (function $rotateCube () {

		var x = getRandomInt (3) - 2;
		var y = getRandomInt (3) - 2;
		var z = getRandomInt (3) - 2;
		var deg = 0;

		switch('' + x + y + z){
		case '000': deg = 0;
		 break;
		case '100': deg = 90;
		 break;
		case '-100': deg = 180;
		 break;
		case '010': deg = -90;
		 break;
		case '0-10': deg = 90;
		 break;
		case '110': deg = getRandomInt (720) - 360;
		 break;
		case '-1-10': deg = getRandomInt (720) - 360;
		 break;
		case '110': deg = getRandomInt (720) - 360;
		 break;
		case '-1-10': deg = getRandomInt (720) - 360;
		 break;
		case '001': deg = 350 + getRandomInt (10);
		 break;
		case '00-1': deg = 350 + getRandomInt (10);
		 break;
		case '101': deg = 100 + getRandomInt (10);
		 break;
		case '-101': deg = 100 + getRandomInt (5);
		 break;
		case '011': deg = 40 + getRandomInt (5);
		 break;
		case '0-11': deg = 40 + getRandomInt (5);
		 break;
		case '111': deg = 330 + getRandomInt (5);
		 break;
		case '-1-11': deg = 20 + getRandomInt (5);
		 break;
		case '-1-1-1': deg = -5 + getRandomInt (10);
		 break;
		case '1-1-1': deg = 20 + getRandomInt (10);
		 break;
		case '1-11': deg = -10 + getRandomInt (15);
		 break;
		case '0-1-1': deg = 310 + getRandomInt (10);
		 break;
		case '-11-1': deg = -5 + getRandomInt (10);
		 break;
		case '-111': deg = 30 + getRandomInt (5);
		 break;
		case '11-1': deg = 15 + getRandomInt (10);
		 break;
		case '-110': deg = 50 + getRandomInt (5);
		 break;
		case '-10-1': deg = 30 + getRandomInt (5);
		 break;
		case '01-1': deg = -70 + getRandomInt (15);
		 break;
		case '10-1': deg = -45 + getRandomInt (5);
		 break;
		}

		$('.rCC__cube').css({
				'-webkit-transform': 'rotate3d(' + x + ',' + y + ',' + z + ',' + deg + 'deg)',
				'-moz-transform': 'rotate3d(' + x + ',' + y + ',' + z + ',10deg)',
				'-o-transform': 'rotate3d(' + x + ',' + y + ',' + z + ',10deg)',
				'-ms-transform': 'rotate3d(' + x + ',' + y + ',' + z + ',10deg)',
				'transform': 'rotate3d(' + x + ',' + y + ',' + z + ',' + deg + 'deg)'
		});	

		clearTimeout(rotateCube);

		var rotateCube = setTimeout($rotateCube, 1500);
	}, 1500);
	
	
	$(window).resize(function () {           
		scalePages();
	});

	function scalePages() {     
		
		var positionZ = $('.rCC__cube').width()/2;

		$('.face-of-the-cube_6').css({
			'-webkit-transform': 'translate3d(0,0,' + -positionZ + 'px) rotate3d(1,0,0,180deg)',
			'-moz-transform': 'translate3d(0,0,' + -positionZ + 'px) rotate3d(1,0,0,180deg)',
			'-o-transform': 'translate3d(0,0,' + -positionZ + 'px) rotate3d(1,0,0,180deg)',
			'-ms-transform': 'translate3d(0,0,' + -positionZ + 'px) rotate3d(1,0,0,180deg)',
			'transform': 'translate3d(0,0,' + -positionZ + 'px) rotate3d(1,0,0,180deg)'
		});

		$('.face-of-the-cube_1').css({
			'-webkit-transform': 'translate3d(0,0,' + positionZ + 'px)',
			'-moz-transform': 'translate3d(0,0,' + positionZ + 'px)',
			'-o-transform': 'translate3d(0,0,' + positionZ + 'px)',
			'-ms-transform': 'translate3d(0,0,' + positionZ + 'px)',
			'transform': 'translate3d(0,0,' + positionZ + 'px)'
		});

		$('.face-of-the-cube_2').css({
			'-webkit-transform': 'translate3d(0,0,' + positionZ + 'px) rotate3d(0,1,0,90deg)',
			'-moz-transform': 'translate3d(0,0,' + positionZ + 'px) rotate3d(0,1,0,90deg)',
			'-o-transform': 'translate3d(0,0,' + positionZ + 'px) rotate3d(0,1,0,90deg)',
			'-ms-transform': 'translate3d(0,0,' + positionZ + 'px) rotate3d(0,1,0,90deg)',
			'transform': 'translate3d(0,0,' + positionZ + 'px) rotate3d(0,1,0,90deg)'
		});

		$('.face-of-the-cube_3').css({
			'-webkit-transform': 'translate3d(0,0,' + positionZ + 'px) rotate3d(1,0,0,-90deg)',
			'-moz-transform': 'translate3d(0,0,' + positionZ + 'px) rotate3d(1,0,0,-90deg)',
			'-o-transform': 'translate3d(0,0,' + positionZ + 'px) rotate3d(1,0,0,-90deg)',
			'-ms-transform': 'translate3d(0,0,' + positionZ + 'px) rotate3d(1,0,0,-90deg)',
			'transform': 'translate3d(0,0,' + positionZ + 'px) rotate3d(1,0,0,-90deg)'
		});

		$('.face-of-the-cube_4').css({
			'-webkit-transform': 'translate3d(0,0,' + positionZ + 'px) rotate3d(0,1,0,-90deg)',
			'-moz-transform': 'translate3d(0,0,' + positionZ + 'px) rotate3d(0,1,0,-90deg)',
			'-o-transform': 'translate3d(0,0,' + positionZ + 'px) rotate3d(0,1,0,-90deg)',
			'-ms-transform': 'translate3d(0,0,' + positionZ + 'px) rotate3d(0,1,0,-90deg)',
			'transform': 'translate3d(0,0,' + positionZ + 'px) rotate3d(0,1,0,-90deg)'
		});

		$('.face-of-the-cube_5').css({
			'-webkit-transform': 'translate3d(0,0,' + positionZ + 'px) rotate3d(1,0,0,90deg)',
			'-moz-transform': 'translate3d(0,0,' + positionZ + 'px) rotate3d(1,0,0,90deg)',
			'-o-transform': 'translate3d(0,0,' + positionZ + 'px) rotate3d(1,0,0,90deg)',
			'-ms-transform': 'translate3d(0,0,' + positionZ + 'px) rotate3d(1,0,0,90deg)',
			'transform': 'translate3d(0,0,' + positionZ + 'px) rotate3d(1,0,0,90deg)'
		});
	}

 /* The END */	

	};


})(jQuery);