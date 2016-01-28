(function($, undefined){
	$(function (){
		
		$showHint('#firstname','#lastname','#address');

		$showTabs({
			'#tabs-1': '#news',
			'#tabs-2': '#text',
			'#tabs-3': '#about'
		});

		function $showHint() {

			for (var i in arguments) {
				var idInput = arguments[i];
				var focusInput = true;

				$( $(idInput).parent() )
					.append('<label for=idInput class="hint"></label>')
					.find('.hint')
					.text( $(idInput).attr('title') )
					.hide();

				$(idInput)
				.removeAttr('title')
				.mouseout(function() {
					if(focusInput) {
						$(this).parent().find('.hint').hide(250);
					}
				})
				.mouseover(function() {
					$(this).parent().find('.hint').show(250);
				})
				.focusin(function() {
					$(this).parent().find('.hint').show(250);
					$(this).off('mouseout');
				})
				.focusout(function() {
					if(focusInput) {
						$(this).parent().find('.hint').hide();
					}
					$(this).on('mouseout',(function() {
						if(focusInput) {
							$(this).parent().find('.hint').hide();
						}
					}));
				});

				$('#showHelp').click(function() {
					if(focusInput) {
						$('.hint').show(260);
						$(this).text('Hide help');
					} else {
						$('.hint').hide(260);
						$(this).text('Show help');
					}
					var setTimeDel = setTimeout(function () {
						(focusInput) ? (focusInput = false) : (focusInput = true);
						clearTimeout(setTimeDel);
					}, 300);
				});
			}
		}

		function $showTabs(arg) {
			var activeTab = Object.keys(arg).valueOf()[0];
			var argLenght = Object.keys(arg).length;

			for ( var navTab in arg) {
				var infoPanelAll = arg[navTab].valueOf();

				if (activeTab != navTab) {
					$(infoPanelAll).hide();
				} else {
					$(navTab).addClass('nav__tabs_active');
				}
			}

			$(document)
				.mouseover(function(e) {
					for ( var navTab in arg) {
						if (('#' + e.target.id) == navTab) {
							$(navTab).addClass('nav__tabs_hover');
						}
					}
				})

				.mouseout(function(e) {
					for ( var navTab in arg) {
						if (('#' + e.target.id) == navTab) {
								$(navTab).removeClass('nav__tabs_hover');
						}
					}
				})

				.click(function (e) {
					for ( var navTab in arg) {
						if (('#' + e.target.id) == navTab) {
							e.preventDefault();
							$(navTab).addClass('nav__tabs_active');
							var infoPanel = arg[navTab].valueOf();
							$(infoPanel).show(200);

							for ( var navTabNoActive in arg) {
								if (('#' + e.target.id) != navTabNoActive) {
									$(navTabNoActive).removeClass('nav__tabs_active');
									var infoPanelNoActive = arg[navTabNoActive].valueOf();
									$(infoPanelNoActive).hide(200);
								}
							}
						}
					}
				});
		}

	});
})(jQuery);