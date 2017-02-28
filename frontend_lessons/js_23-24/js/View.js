'use strict';

// MVC

class View {
	init (tree, parentElement) {

		try {
			BEMt (tree, parentElement = 'body', false);
		} catch(e) {
			BEMt (tree);
		}
	}

	input (){
		return $('.controlls__value');
	}
	addBtn() {
		return $('.controlls__add');
	}
	listContainer () {
		return $('.list');
	}

	renderList(data, parentElement = '.list') {
		for (var n in data) {
			n = '\n\t__LI.item-add' + '\u0020' + data[n].valueOf();
			BEMt (n, parentElement);
		}
	}
}