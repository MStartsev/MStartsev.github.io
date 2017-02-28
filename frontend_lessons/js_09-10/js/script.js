jQuery(function (){


// MENU

	$('#header-nav_wpapper').hide();
	$('.header-submenu').hide();

	$( "#header-nav_wpapper" ).click(function(event) {
		event.stopPropagation();
	});

	$('#header-nav').click(function(event){

		if ($('.header-menu').hasClass('header-menu-anima')) {

			$('.header-menu')
				.removeClass('header-menu-anima')
				.find('li')
				.animate({
						backgroundColor: "#B2C836",
						boxShadow: 'inset 0 0 30px 4px rgba(0,0,0, 0.9), inset 0 0 40px 8px #4CF000'
				}, 100 )
				.end()
				.find('.header-submenu')
				.removeClass('header-submenu-anima')
				.hide(100);
		}

		$('#header-nav')
		.find('#nav-toggle')
		.toggleClass('active')
		.end()
		.find('#header-nav_wpapper').toggle(1000);
	});

	$( ".header-submenu" ).mouseover (function(event) {
		event.stopPropagation();
	});

	$('.header-menu li')
		.mouseover (function () {
			$(this)
			.parent()
			.find('li')
			.animate({
				backgroundColor: "#B2C836",
				boxShadow: 'inset 0 0 30px 4px rgba(0,0,0, 0.9), inset 0 0 40px 8px #4CF000'
			}, 300 )
			.end()
			.addClass('header-menu-anima')
			.find('.header-submenu')
			.animate({
				opacity: 0.1
			}, 100 )
			.hide(100)
			.end()
			.end()
			.animate({
				backgroundColor: '#FFE93A',
				boxShadow: 'inset 0 0 30px 4px rgba(0,0,0, 0.9), inset 0 0 45px 10px #ADF000'
			}, 300 )
			.find('.header-submenu')
			.addClass('header-submenu-anima')
			.show(120)
			.animate({
				opacity: 0.99
			}, 100 )
			.find('li')
			.mouseout (function () {
				$(this)
				.animate({
					backgroundColor: "#B2C836",
					boxShadow: 'inset 0 0 30px 4px rgba(0,0,0, 0.9), inset 0 0 40px 8px #4CF000'
				}, 300 );
			});
		});


// jcarousel

	$('.jcarousel').jcarousel({
			wrap: 'circular'
	});
	$('.jcarousel_prev').jcarouselControl({
		target: '-=1'
	});

	$('.jcarousel_next').jcarouselControl({
		target: '+=1'
	});

	$('.jcarousel_pagination')

	.on('jcarouselpagination:active', 'a', function() {
		$(this).addClass('active_pag');
	})

	.on('jcarouselpagination:inactive', 'a', function() {
		$(this).removeClass('active_pag');
	})

	.jcarouselPagination({
		item: function(page) {
			return '<a class="jcarousel_pag" href="#' + page + '">' + '</a>';
		}
	});

	$('.jcarousel').jcarouselAutoscroll({
		interval: 3000,
		target: '+=1',
		autostart: true
	});


// cuSel

	var params = {
		changedEl: "#idSelect",
		visRows: 7,
		// if visRows < option.quantity => 
		// Uncaught Error: Syntax error, unrecognized expression: # (???)
		scrollArrows: false
	};

	cuSel(params);


// jQuery checkbox

	$('#jQ_ch2').prop('checked', true);

	$(".jQ_checkbox").click(

		function () {
			changeCheck($(this).find("span"));
	});

	$(".niceCheck").each(
	
	function () {
		changeCheckStart($(this));
	});

	function changeCheck (el) {
		var checkbox = el.find("input").eq(0);

		if (!elementDisabled (el, checkbox)) {
			$(changeChecked(el, checkbox));
		}

	}

	function elementDisabled (el, checkbox) {

		if (checkbox.is(':disabled')) {
			el.addClass('checkboxDisabled');
			return true;
		}

		return false; 
	}

	function changeDisabled (parentEl, check) {

		if ( $(check).parent(parentEl) ) {

			$(check)
				.prop('disabled', true)
				.parent(parentEl)
				.addClass('checkboxDisabled');
		}

	}

	function changeDisabledChecked (el, parentEl, check) {

		if ($(el).attr('id') == check) {
			changeDisabled (parentEl, '#' + check);
		}

	}


	function changeChecked (el, checkbox) {

		if(checkbox.is(':checked')) {

			if ($(el).hasClass('checkboxChecked')) {
				checkbox.prop('checked', false);
				el.removeClass('checkboxChecked')
					.addClass('checkboxDefault');

			} else {
				el.addClass('checkboxChecked');
			}

		} else {

			if ($(el).hasClass('checkboxDefault')) {
				checkbox.prop('checked', true);
				el.removeClass('checkboxDefault')
					.addClass('checkboxChecked');

				changeDisabledChecked (checkbox, '.checkboxChecked', 'jQ_ch3');

			} else {
				el.addClass('checkboxDefault');
			}

		}

		return true;
	}

	function changeCheckStart(el) {
		var checkbox = el.find("input").eq(0);

		elementDisabled (el, checkbox);
		$(changeChecked(el, checkbox)); 
		return true;
	}

});