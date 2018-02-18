window.$ = window.jQuery = require('jquery');
import 'bootstrap';
import './assets/css/main.scss';

$(document).ready(function() {
	var after = false;
	var navbar = $('#navbar');
	$(window).on('scroll', function(event) {
		event.preventDefault();
		console.log('scrollY:' + window.scrollY);
		if (!after && window.scrollY > 12) {
			after = true;
			navbar.toggleClass('navbar-after');
		} else if (after && window.scrollY < 12) {
			after = false;
			navbar.toggleClass('navbar-after');
		}
	});
});