'use strict';

// MVC

class Model {
	item(data) {

		this.data = data;

		this.addItem = item => {
			
			if (item.length === 0) {
				return;
			}
			
			this.data.push(item);
			return this.data;
		}

		this.removeItem = item => {
			let index = this.data.indexOf(item);
			
			if (index === -1) {
				return;
			}
			
			this.data.splice(index, 1);
			return this.data;
		}
	}
}