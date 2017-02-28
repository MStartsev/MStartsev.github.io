(() => {

	'use strict';

	let test = {
		'title test': 'Test JavaScript',
		submit: 'Check my results',

		question:  {

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
				'answer4': 'Answer number 4',
				'answer5': 'Answer number 5',
			}

		},

		answer:  {
			'Question 1?': 'answer1',
			'Question 2?': 'answer2',
			'Question 3?': 'answer3',
		},

		localStorageManager (localStorageName, objName) {

			if ( localStorage[localStorageName] ) {

				let managerlocalStorage = localStorage[localStorageName];

				return JSON.parse(managerlocalStorage);

			} else {

				localStorage[localStorageName] = JSON.stringify(objName);

				return JSON.parse( localStorage[localStorageName] );
			}
		},

		questionlocalStorage () {

			return this.localStorageManager('question', this.question);
		},

		answerListId (questionName, answerName, answerId) {

			for ( let i in this.answer ) {

				if (i.valueOf() == questionName.valueOf() &&
					this.answer[i].valueOf() == answerName.valueOf()) {

					this.answer[i] = answerId;
				}
			}
		},

		inspection () {
			let answer = this.answer,
					answerReturn = '<div id="answerReturn">',
					trueAnswer = 0,
					total = 0;

			for ( let i in answer ) {
				let answerId = document.getElementById(answer[i]);

				total++;

				if (answerId.checked == true ) {
					trueAnswer++;
					answerId.checked = false;
					answerReturn += '<p>' + i + ':' + '<span style="color: green;"> true </span></p>';

				} else {
					answerReturn += '<p>' + i + ':' + '<span style="color: red;"> false </span></p>';
				}

			}

			let colorNum = 255 - (255 * trueAnswer / total);
			colorNum = '<span class="colorNum" style="color: rgb(' + colorNum + ', ' + (255 - colorNum) + ', 0)">';
			answerReturn += colorNum + trueAnswer + '/' + total + '</span>' + '</div>';

			return answerReturn;
		},

		modalWindow () {
			let modalWindow = this.inspection(),
					testForm = document.body.querySelector('.test');

			testForm.innerHTML += modalWindow;
			let modalWindowId = document.getElementById('answerReturn');

			modalWindowId.addEventListener('click', function removeWindow (event) {
				event.stopPropagation();
				testForm.removeChild(modalWindowId);
			});

			this.submitInput();
		},

		submitInput () {
			let This = this,
					submitInput = document.body.querySelector('input[type="submit"]');

			submitInput.addEventListener('click', function (event) {
					event.preventDefault();

				if (document.getElementById('answerReturn')) {
					document.body.querySelector('.test').removeChild(document.getElementById('answerReturn'));
				}

					This.modalWindow();
			});

		},

		generateTest: function () {
			let form = document.createElement('form');
			form.className = 'test';
			document.body.appendChild(form);

			let h2 = document.createElement('h2');
			h2.innerHTML = this['title test'];
			form.appendChild(h2);

			let ul = document.createElement('ul');
			form.appendChild(ul);

			let inputSubmit = document.createElement('input');
			inputSubmit.type = 'submit';
			inputSubmit.value = this['submit'];
			form.appendChild(inputSubmit);

			let num = 1,
					numRadio = 1,
					txt = '<style>';

			for ( let i in this.questionlocalStorage() ) {

				let nameRadio = 'nameAnswer' + numRadio++;

				let li = document.createElement('li');
				ul.appendChild(li);

				let h3 = document.createElement('h3');
				h3.innerHTML = i;
				li.appendChild(h3);

				let answ = this.questionlocalStorage()[i];

				for ( let j in answ ) {

					if (num > 1){
						txt += ',';
					}

					let radio = document.createElement('input');
					radio.type = 'radio';
					radio.name = nameRadio;
					radio.id = 'answer' + num;
					txt = txt +'#'+ radio.id + ':checked ~ #';
					li.appendChild(radio);

					let label = document.createElement('label');
					label.htmlFor = radio.id;
					label.id = 'label' + num++;
					txt = txt + label.id +':before';
					label.innerHTML = answ[j];
					li.appendChild(label);

					this.answerListId(i, j, radio.id);
				}

			}

			this.localStorageManager('answer', this.answer);

			txt += '{background-color: rgba(0, 100, 255, .2)}</style>';
			document.head.innerHTML += txt;
		},

		start: function () {
			this.generateTest();
			this.submitInput();
		}
	}

	window.onload = () => test.start();

	console.log ('localStorage["question"] = '+ localStorage["question"]);
	console.log ('localStorage["answer"] (ElementsID) = '+ localStorage["answer"]);

})();