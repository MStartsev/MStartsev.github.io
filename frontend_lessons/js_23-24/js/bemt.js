/*!
 * BEMt (BEM transform Html tree) JavaScript Plugin v1.0
 * https://github.com/MStartsev
 * Copyright Mykhailo Startsev
 * MIT license, 2017 */

'use strict';

function BEMt (_bem, _id = false, add = 'beforeEnd') {
	//var addHelp = ['beforeBegin', 'afterBegin', 'beforeEnd', 'afterEnd', false];

	function maxLevel(tree, stepTree = 32, searchElement = '\+') {

		for (let step = stepTree; step >= 0 ; --step) {

			let testTree = new RegExp('[\n][\u0020|\t]{' + step +'}[' + searchElement + '].*', 'igm');

			if(tree.match(testTree)) {
				return step;
			}
		}
	}

	function replacerModificator(classEl, modificator) {
		let resalt = classEl;

		modificator = modificator.split(/_/);
		modificator.splice(0, 1);

		for ( var mod in modificator) {
			resalt = resalt + '\u0020' + classEl + '_' + modificator[mod];
		}

		return resalt;
	}

	function emptyElement(tag) {

		const EMPTY = '\narea\nbase\nbr\ncol\ncommand\nembed\nhr\nimg\ninput\nkeygen\nlink\nmeta\nparam\nsource\ntrack\nwbr\n';
		let answer = '';
		let res = EMPTY.search(new RegExp('\n' + tag + '\n'));

		if(res == (-1)) {
			answer = '</' + tag + '>';
		}

		return answer;
	}

	function replacerTree (bemTree) {
		let maxLevelStep = maxLevel(bemTree);

		if(!maxLevelStep) {
			let maxLevelElement = maxLevel(bemTree, 9, '__');

			for (var levelStep = maxLevelElement; levelStep > 0;
			levelStep = maxLevel(bemTree, maxLevelElement, '__') ) {

				let _elementAndReady_element = [];
				_elementAndReady_element.push('([\n][\u0020|\t]{', levelStep,
					'})__\\.?([A-Z0-9-]*)\\.?([a-z0-9-_]*)([\u0028][^\u0028\u0029]*[\u0029])?(.*)',
					'(([\n][\u0020|\t]{', (levelStep+1), ',}.*)*)');	

				bemTree = bemTree
					.replace(new RegExp(_elementAndReady_element.join(''),'gm'), replacerElement);		
			}
		} else {
			
			for (var levelStepElement = maxLevelStep; levelStepElement > 0;
			levelStepElement = maxLevel(bemTree, levelStepElement) ) {			
				let blockAndElement = [];
				blockAndElement.push('([\n][\u0020|\t]{', levelStepElement, '})[\+]\\.([A-Z0-9-]*)\\.?([a-z0-9-_]*)\u0020?(.*)',
					'(([\n][\u0020|\t]{', (levelStepElement+1), ',}.*)*)');

				bemTree = bemTree
					.replace(new RegExp(blockAndElement.join(''), 'gm'), replacerBlock);
			}
		}

		return bemTree;
	}

	function replacerBlock (str, p1, p2, p3, p4, p5) {

		let blockTag = p2
			.replace(/([A-Z0-9]+)/gm, '$1')
			.toLowerCase();

			if (!blockTag) {
				blockTag = 'div';
			}

		let	blockClass;
			
			if (/([a-z0-9]+)/gm.test(p2)) {
				blockClass = p2.toLowerCase();
			}

			if (/([a-z0-9]*)/gm.test(p3)) {
				blockClass = p3.replace(/([a-z0-9]*)(_[a-z0-9]*)*/, '$1')
			}

			if (!blockClass) {
				(blockTag == 'ul') ? (blockClass = 'list') : (blockClass = 'item');
			}

		let blockModification;

			if(/[a-z0-9](_[a-z0-9]+){1,}/gm.test(p2)) {
				blockModification = replacerModificator(blockClass, p2);
			}

			if(/[a-z0-9](_[a-z0-9]+){1,}/gm.test(p3)) {
				blockModification = replacerModificator(blockClass, p3);
			}

			if (!blockModification) {
				blockModification = blockClass;
			}

		let elements = '';

			if (p5) {
				elements = p5;
			}

		let blockText = '';
			if (p4) {
					blockText = p4;
			}

		let _replacerElement = (_str, _p1, _p2, _p3, _p4, _p5, _p6) => {
			return replacerElement(_str, _p1, _p2, _p3, _p4, _p5, _p6, blockClass, blockTag)
		}

		let maxLevelStepEl = maxLevel(elements, 9, '__');

		for (var levelStep = maxLevelStepEl; levelStep > 0;
			levelStep = maxLevel(elements, maxLevelStepEl, '__') ) {

				let _elementAndReady_element = [];
				_elementAndReady_element.push('([\n][\u0020|\t]{', levelStep,
					'})__\\.?([A-Z0-9-]*)\\.?([a-z0-9-_]*)([\u0028][^\u0028\u0029]*[\u0029])?(.*)',
					'(([\n][\u0020|\t]{', (levelStep+1), ',}.*)*)');	

				elements = elements
					.replace(new RegExp(_elementAndReady_element.join(''),'gm'), _replacerElement);
		}

		return p1 + '<'+ blockTag + '\u0020class="' + 
		blockModification +'">\u0020' + blockText +
		elements + p1 + '</'+ blockTag + '>';
	}

	function replacerElement (_str, _p1, _p2, _p3, _p4, _p5, _p6, 
		blockClass = _id.replace(/\.?([a-z0-9]+)/gim, '$1'), blockTag = 'div') {

		let elementTag;

			if (/([A-Z0-9]+)/gm.test(_p2)) {
				elementTag = _p2.toLowerCase();
			}

			if(!(_p2) && !(/(\(\u0027.*)/gm.test(_p4))) {
				(blockTag == 'ul') ? (elementTag = 'li') :
				elementTag = 'span';
			}

			if(!(_p2) && (/(\(\u0027.*)/gm.test(_p4))) {
				elementTag = 'a';
			}

		let _elementClass = (_p3) => {
			let elClass = _p3.replace(/([a-z0-9]+)\_[a-z0-9]*/, '$1');

			if (!elClass) {

				(elementTag == 'img') ? (elClass = 'image') :
				(elementTag == 'a') ? (elClass = 'link') :
				(elClass = 'item')
			}

			return elClass;
		};

		let elementClass = replacerModificator((blockClass + '__' + _elementClass(_p3)), _p3);

		let otherdata = '';

		if (/(\(\u0027.*)/gm.test(_p4)) {

			((elementTag != 'img') && (elementTag != 'a')) ?	(otherdata = ' $1 $2') : 
			(elementTag == 'img') ? (otherdata = ' src="$1" $2') :
			(elementTag == 'a') ? (otherdata = ' href="http://www.$1" $2') : 0;

			otherdata = _p4.replace(/\(\u0027(.*)\u0027(.*)\)/, otherdata);
		}

		let elementText = _p5 || '';

		let _ready_element = _p6 || '';

		let answer = [];
		answer.push(_p1, '<', elementTag, '\u0020class="', elementClass,
			'"', otherdata, '>', elementText, _ready_element, _p1,
			emptyElement(elementTag));

		return answer.join('');
	}

	_bem = replacerTree(_bem);
	
	// print ready tree in window =>
	var BEMtMAP;
	(window.BEMtMAP) ? (BEMtMAP = window.BEMtMAP) : 
	(window.BEMtMAP = BEMtMAP = new Map());

	if (BEMtMAP.size > 99) {
		BEMtMAP.clear();
	}

	if (_id === false) {
		document.write ( _bem)
	} else {

		if (!BEMtMAP.has(_id)) {
			BEMtMAP.set(_id,
				((_id) => {
						return document.querySelectorAll(_id);
				})(_id)
			)
		}

		for (let n=0; n < BEMtMAP.get(_id).length; n++) {
			add ? BEMtMAP.get(_id)[n].insertAdjacentHTML(add, _bem) :
				BEMtMAP.get(_id)[n].innerHTML = _bem;
		}
	}
}