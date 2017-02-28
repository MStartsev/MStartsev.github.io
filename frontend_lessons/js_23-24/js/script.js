$( function () {
	let model = new Model();
	model.item(list[1]);

	let view = new View();
	view.init(list[0][0]);
	view.renderList(model.data);

	let controller = new Controller();
	controller.ivent(model, view);
})