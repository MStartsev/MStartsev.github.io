'use strict';

// MVC

class Controller {
	ivent (model, view, parentElement  = '.list'){
		view.addBtn().on('click', addItem);
		view.listContainer().on('click', parentElement + '__item-add', removeItem);

		function addItem () {
			let newItem = view.input().val()
			.replace(/(^[\n\t\u0020])/gim, '')
			.replace(/([\n\t\u0020]$)/gim, '');
			view.input().val('');
			model.addItem(newItem);
			BEMt('', parentElement, false);
			view.renderList(model.data, parentElement);
		}

		function removeItem () {
			let item = $(this).text()
			.replace(/(^[\n\t\u0020])/gim, '')
			.replace(/([\n\t\u0020]$)/gim, '');
			model.removeItem(item); 
			BEMt('', parentElement, false);
			view.renderList(model.data, parentElement);
		}
	}
}