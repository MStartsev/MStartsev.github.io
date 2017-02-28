// create DOM elements

createEl('div',document.body,'wrapper');
	createEl('header','.wrapper');
		createEl('nav','header','header-nav');
			var headerNav = ['Білий','Сірий','В капелюсі'];
			multiCreateEl('a','.header-nav',3,'header-nav_option','header-a',headerNav);
	createEl('section','.wrapper');
		createEl('form','section','timer');
			var timeDisplay0 = '00:00:00.000';
			createEl('input','.timer','button','table', timeDisplay0);
			createEl('div','.timer','wrap');
				createEl('input','.wrap','button','start','Start');// start/stop
				createEl('input','.wrap','button','split','Split');//split
				createEl('input','.wrap','button','reset','Reset');//reset			
	createEl('footer','.wrapper');
		createEl('nav','footer','footer-nav');
			var footerNav = ['&copy;&nbsp;2016', 'MStartsev.github.io','Зелений','Синій','Чорний'];
			multiCreateEl('a','.footer-nav',5,'footer-nav_option','footer-a',footerNav);

function createEl(tagNAME, parentELEMENT, classNames, tagID, innHTML) {
	var tNAME = document.createElement(tagNAME);
		(tagNAME == 'a') ? (tNAME.href = '#') : 0;
		(tagID) ? (tNAME.id = tagID) : 0;
	var pos = -1;
	var posMes;
	var target = "input";
		while ( (pos = tagNAME.indexOf(target, pos + 1) ) !== -1) {
			posMes = pos;
		};

		if (posMes > -1) {
			(classNames) ? (tNAME.type = classNames) : 0;
			(innHTML) ? (tNAME.value = innHTML) : 0;
		} else {
			(classNames) ? (tNAME.className = classNames) : 0;
			(innHTML) ? (tNAME.innerHTML = innHTML) : 0;
		};

		try {
			parentELEMENT.appendChild(tNAME);
		}
		catch(e) {
			var pE = document.querySelector(parentELEMENT);
			pE.appendChild(tNAME);
		};
};

function multiCreateEl(tNAME, parELEMENT, quantity, clNames, tID,inHTML) {
	for (var i = 0; i < quantity; i++) {
		tIDi = tID + '_' + (i + 1);
		if ( typeof(inHTML) == 'object' ) {
			inHTMLi = inHTML[i];
		  } else { inHTMLi = inHTML };
		createEl(tNAME, parELEMENT, clNames, tIDi, inHTMLi);
	};
};

// end create DOM elements
// timer

getEventoSelectors('click', clickTimer, '#start','#split','#reset');

var	POINT = new Date(1970,1,1,0,0,0,0).valueOf();
var countInterval = counterTime();
var countReset = 0;
var	stopInterval = 0;
var stopTimer = 0;

function getEventoSelectors (event, funEvent) {
	for (var i = 2; i < arguments.length; i++) {
		document.querySelector(arguments[i]).addEventListener(event, funEvent);
	};
};

function counterTime() {
	return new Date().valueOf();
};

function valueTime(CountT){
	(CountT) ? 0 : (CountT = counterTime() - countInterval - stopTimer);
	var d = new Date(CountT + POINT).toString().replace(/.*([0-9][0-9]:[0-9][0-9]:[0-9][0-9]).*/,'$1');
	var xxx = String(CountT%1000);
	while(xxx.length<3)
	xxx='0'+xxx;
	d+='.'+xxx;
	return d;
};

function reloadDisplay() {
	document.querySelector('#table').value = valueTime();							
};

function clickTimer () {
	if (this.id == 'split') {
		countReset = 2;
		};

	if (this.id == 'reset') {
		deleteTimerBox();
		countReset = 3;
		document.querySelector('#table').value = timeDisplay0;
		document.querySelector('#start').value = 'Start';
		stopTimer = stopInterval = 0;
		countInterval = counterTime();
	};

	if ( this.id == 'start' ) {

		if (document.querySelector('#start').value == 'Stop') {
				countReset = 1;
				document.querySelector('#start').value = 'Start';
		} else {
				document.querySelector('#start').value = 'Stop';

				if (countReset == 3 || countReset == 0) {
					countInterval = counterTime();
				};

				if (stopInterval != 0) {
					stopTimer += counterTime() - stopInterval;
				};

				countReset = 0;
				var startSplit = counterTime();

				var step = setTimeout(function run() {
					reloadDisplay();
					clearTimeout(step);
					var step = setTimeout(run, 7);

					if (countReset == 1) {
						clearTimeout(step);
						stopInterval = counterTime();
						createTimerBox( 'Stop: ' + valueTime() );
					};

					if (countReset == 2) {
						var splitResult = counterTime() - startSplit;
						createTimerBox( 'Split: ' + valueTime(splitResult) );
						startSplit = counterTime();
						countReset = 0;
					};

					if (countReset == 3) {
						clearTimeout(step);
						document.querySelector('#table').value = timeDisplay0;
					};

				}, 7);
		};
	};
};

function createTimerBox(arg) {
	if ( document.querySelector('.split-box') ) {
		createEl('p','.split-box','timer-box',0, arg);
	} else {
		createEl('article','.timer','split-box')
	createEl('p','.split-box','timer-box',0, arg);
	};
};

function deleteTimerBox() {
	var TimerBox = document.querySelector('.split-box');
	TimerBox.remove();
};

// end timer
// themes

getEventoSelectors('click', clickThemes,
	'#header-a_1', '#header-a_2', '#header-a_3',
	'#footer-a_3', '#footer-a_4', '#footer-a_5');

var clickTheme;
var clickThemeBar;

var hat = true;

function clickThemes() {

	if (this.id == 'header-a_1') {
		clickThemeBar = ''; clickTheme = '';
	};

	if (this.id == 'header-a_2') {
		clickThemeBar = 'barBgGrey';
		clickTheme = 'bgGrey';
	};

	if (this.id == 'footer-a_3') {
		clickThemeBar = 'barBgGreen';
		clickTheme = 'bgGreen';
	};

	if (this.id == 'footer-a_4') {
		clickThemeBar = 'barBgBlue';
		clickTheme = 'bgBlue';
	};

	if (this.id == 'footer-a_5') {
		clickThemeBar = 'barBgBlack';
		clickTheme = 'bgBlack';
	};
	document.querySelector('.header-nav').className = clickThemeBar + ' header-nav';
	document.querySelector('footer').className = clickThemeBar;
	document.querySelector('.footer-nav').className = clickThemeBar + ' footer-nav';
	document.querySelector('section').className = clickTheme;

	if (this.id == 'header-a_3') {
		if (hat == true) {
			document.querySelector('section').style.backgroundImage = 'url(img/hat.png)';
			hat = false;
		} else {
			document.querySelector('section').style.backgroundImage = '';
			hat = true;
		};
	};
};

// end themes