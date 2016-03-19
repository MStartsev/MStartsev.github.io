$(function() {

	'use strict';

	var $search = $('.search'),
			visibilElement = "show";

	function $ajaxQuery (k){ 
		 
		var textSearch = $('#textSearch').val(),      
			$wrapper = $('.wrapper'),
			key = 'ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg',
			url = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=' + key + '&rsz=8&start=' + k*8 + '&q='+ textSearch + '&callback=GoogleCallback&context=?';
		$('.results').remove();

		if (!textSearch) { return null; }

		$.ajax({
			url: url,
			dataType : "jsonp",
			success: function(data) {

				var results = document.createElement('div');
				results.classList.add('results');
				var ul = document.createElement('ul');

				var moreResults = document.createElement('div');
				moreResults.classList.add('more-results');
				var h3 = document.createElement('h3');
				h3.innerHTML = ('More results');
				var p = document.createElement('p');
				p.classList.add('more-results-list');            

				$.each(data.results, function(i, val) {

					var li = document.createElement('li');
					li.innerHTML = ('<h3><a href="' + val.url + '">' + val.title + '</a></h3><p class="visibleURL">' + val.visibleUrl + '</p><p class="content">' + val.content + '</p>');
					ul.appendChild(li);
				});

				for (var i = 0; i < 8; i++) {
					p.innerHTML += '<a href="#" class="search-more">' + (i+1) + '</a>';
				}

				p.innerHTML += '<a href="#" class="search-next ' + visibilElement + '">Next</a>';

				results.appendChild(ul);
				$wrapper.append(results);
				moreResults.appendChild(h3);
				moreResults.appendChild(p);
				results.appendChild(moreResults);

				var setAnchors = function(k) {

					var $anchors = $('.search-more');

					$.each($anchors, function(i) {

						$anchors[k].classList.add('active');
									
						$anchors[i].addEventListener('click', function(e) {
							e.preventDefault();
							$ajaxQuery(i);

							if (i+1>=8) {

							visibilElement = "hide";

							} else {
							visibilElement = "show";
							}
						});
					});

					$('.search-next')[0].addEventListener('click', function(e) {
						e.preventDefault();

						if (k+1 <= 6) {

						$ajaxQuery(k+1);
						visibilElement = "show";

						} else {

						visibilElement = "hide";
						$ajaxQuery(k+1);

						}                 
					});               
				};

				setAnchors(k);
			}
		});
	}


	$search.submit(function(e) {

		e.preventDefault();

		$ajaxQuery(0);

	});

	function $searchList(e) {

		e.preventDefault();

		$ajaxQuery(0);
	}

});

// callback function
function GoogleCallback (func, data) {

	window[func](data);

}

function Human () {
	this.name = 'Human';
	this.sex = 'male';
	this.age = '18';
	this.heigth = '176';
	this.weigth = '62';
	this.say = function () {
		console.table (this.name);
	};
}

function Worker() {
	this.job = 'programmer';
	this.salary =  '1000$';
	this.work = function () {
		console.log ("Hello! I'm " + this.name + ". " + "Let's make code.");
	};
}

function Student () {
	this.placeOfStudy = 'college';
	this.grant = '350$';
	this.TVseries = function () {
						console.log ("Hello! I'm " + this.name + ". " + "Let's watch 'The Shannara Chronicles'.");
	};
}

Worker.prototype = new Human();
var newWorker = new Worker();
newWorker.name = 'Bob';

Student.prototype = new Human();
var newStudent = new Student();
newStudent.name = 'Tom';

console.log ({'Worker': newWorker}, {'Student': newStudent});

newWorker.work();
newStudent.TVseries();