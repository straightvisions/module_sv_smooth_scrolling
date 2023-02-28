window.addEventListener('load', function() {
	// Select all links with hashes
	const links = document.querySelectorAll('a[href*="#"]:not([href="#"]):not([href="#0"]):not([data-toggle]):not([target="_blank"]):not([href*="#sv_toggle_"]):not([href*="#tab-"]):not([class^="tabs"]):not([class*="tab"])');
	
	links.forEach(link =>
		link.addEventListener("click", function(event) {
		// On-page links
		if (
			location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
			&&
			location.hostname === this.hostname
		){
			// Does a scroll target exist?
			if (this.hash.length && document.getElementById(this.hash.replace('#', '')) && document.getElementById(this.hash.replace('#', '')).offsetTop > 0){
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				const element = document.getElementById(this.hash.replace('#', ''));
				sv100_companion_smooth_scrolling_scroll_to(element, 100); // @todo to settings
				history.replaceState(null, null, ' ');
			}
		}
	}));
});
document.addEventListener("DOMContentLoaded", function() {
	sv100_companion_smooth_scrolling_on_pageload();
});
// support for prevent fouc feature
//document.addEventListener('sv100_companion_fouc_done', function(){
	//sv100_companion_smooth_scrolling_on_pageload();
//});

function sv100_companion_smooth_scrolling_on_pageload(){
	// *only* if we have anchor on the url
	if(window.location.hash){
		// smooth scroll to the anchor id
		sv100_companion_smooth_scrolling_scroll_to( document.getElementById(window.location.hash.replace('#', '')), 100 );
	}
}

function sv100_companion_smooth_scrolling_scroll_to(element, offset){
	//setTimeout(function() { // wait for animations to finish action before calculating positions
		if(element) {
			let y = element.getBoundingClientRect().top + window.scrollY;
			
			// calculate offset by sticky header
			
			const header = document.querySelector('header');
			
			if(header !== null){
				if (window.getComputedStyle(header).position === 'fixed' || window.getComputedStyle(header).position === 'sticky') {
					 y = y - header.offsetHeight;
					
				}
			}
			
			history.replaceState(null, null, ' ');

			window.scrollTo({
				top: y - offset,
				behavior: 'smooth'
			});
		}
	//}, 200);
}