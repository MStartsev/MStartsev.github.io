var test = { 
	'title test': 'Test JavaScript',
	submit: 'Check my results',

	question: function () {

		var questions = {
			'Question 1?': {
				'answer1': 'Answer number 1',
				'answer2': 'Answer number 2',
				'answer3': 'Answer number 3',	
			},

			'Question 2?': {
				'answer1': 'Answer number 1',
				'answer2': 'Answer number 2',
				'answer3': 'Answer number 3',
			},

			'Question 3?': {
				'answer1': 'Answer number 1',
				'answer2': 'Answer number 2',
				'answer3': 'Answer number 3',	
			},

		};
		return questions;
	},

	genElements: function () {
		var form = document.createElement('form');
		form.className = 'test';
		document.body.appendChild(form);

		var h2 = document.createElement('h2');
		h2.innerHTML = this['title test']
		form.appendChild(h2);

		var ul = document.createElement('ul');
		form.appendChild(ul);

		var inputSubmit = document.createElement('input');
		inputSubmit.type = 'submit';
		inputSubmit.value = this['submit'];
		form.appendChild(inputSubmit);

		var num = 1;
		var txt = '<style>';

		for ( var i in this.question() ) {			

			var li = document.createElement('li');
			ul.appendChild(li);

			var h3 = document.createElement('h3');
			h3.innerHTML = i;			
			li.appendChild(h3);

			var answ = this.question()[i];

			for ( var j in answ ) {

				if (num > 1){
					txt += ',';
				};

				var checkbox = document.createElement('input');
				checkbox.type = 'checkbox';
				checkbox.id = 'answer' + num;
				txt = txt +'#'+ checkbox.id + ':checked ~ #';
				li.appendChild(checkbox);

				var label = document.createElement('label');
				label.htmlFor = checkbox.id;
				label.id = 'label' + num++;
				txt = txt + label.id +':before';				
				label.innerHTML = answ[j];			
				li.appendChild(label);
			}

		};

		txt += '{background-color: rgba(0, 100, 255, .2)}</style>';
		document.head.innerHTML += txt;
	}

};

test.genElements();