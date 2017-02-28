jQuery(function (){

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

	$('.jcarousel-pagination')

	.on('jcarouselpagination:active', 'a', function() {
		$(this).addClass('active_pag');
	})

	.on('jcarouselpagination:inactive', 'a', function() {
		$(this).removeClass('active_pag');
	})

	.jcarouselPagination({

		item: function (page) {
			return '<a class="jcarousel_pag" href="#' + page + '">' + '</a>';
		}
	});

	$('.jcarousel').jcarouselAutoscroll({
		interval: 3000,
		target: '+=1',
		autostart: true
		});
})