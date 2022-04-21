window.addEventListener('load', function() {
	// Select all links with hashes
	const links = document.querySelectorAll('a[href*="#"]:not([href="#"]):not([href="#0"]):not([data-toggle]):not([target="_blank"]):not([href*="#sv_toggle_"])');

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
				sv100_companion_smooth_scrolling_scroll_to(element);
			}
		}
	})
)});

window.addEventListener('load', function() {
	sv100_companion_smooth_scrolling_on_pageload();
});

// support for prevent fouc feature
document.addEventListener('sv100_companion_fouc_done', function(){
	sv100_companion_smooth_scrolling_on_pageload();
});

function sv100_companion_smooth_scrolling_on_pageload(){
	// *only* if we have anchor on the url
	if(window.location.hash){
		// smooth scroll to the anchor id
		sv100_companion_smooth_scrolling_scroll_to( document.getElementById(window.location.hash.replace('#', '')) );
	}
}

function sv100_companion_smooth_scrolling_scroll_to(element, offset){
	setTimeout(function() { // wait for animations to finish action before calculating positions
		if(element) {
			let y = element.getBoundingClientRect().top + window.pageYOffset;

			// calculate offset by sticky/fixed elements
			[].forEach.call(document.querySelectorAll('div'), function (el) {
				if (window.getComputedStyle(el).position === 'fixed' || window.getComputedStyle(el).position === 'sticky') {
					y = y - (el.offsetHeight / 4);
				}
			});
			
			// calculate offset by sticky header
			const header = document.querySelector('.sv100_sv_header_wrapper');
			
			if(header !== null){
				if (window.getComputedStyle(header).position === 'fixed' || window.getComputedStyle(header).position === 'sticky') {
					 y = y - header.offsetHeight;
					
				}
			}

			window.scrollTo({
				top: y,
				behavior: 'smooth'
			});
		}
	}, 200);
}