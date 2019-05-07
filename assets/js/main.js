/*
* Open the drawer when the menu icon is clicked.
*/
var menu = document.querySelector('#menu');
var main = document.querySelector('main');
var drawer = document.querySelector('#topnav');

menu.addEventListener('click', function(e) {
	drawer.classList.toggle('responsive');
	e.stopPropagation();
});

main.addEventListener('click', function() {
	drawer.classList.remove('responsive');
});