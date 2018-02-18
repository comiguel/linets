window.$ = window.jQuery = require('jquery');
import 'bootstrap';
import './assets/css/main.scss';

$(document).ready(function() {
	toggleNavbar();
	$(window).on('scroll', function(event) {
		toggleNavbar();
	});
});

function toggleNavbar() {
	var navbar = $('#navbar');
	if (window.scrollY > 12 && !navbar.hasClass('navbar-after')) {
		navbar.toggleClass('navbar-after');
	} else if (window.scrollY < 12 && navbar.hasClass('navbar-after')) {
		navbar.toggleClass('navbar-after');
	}
}