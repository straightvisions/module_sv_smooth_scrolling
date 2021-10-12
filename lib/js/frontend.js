window.addEventListener('load', function() {
	// Select all links with hashes
	const links = document.querySelectorAll('a[href*="#"]:not([href="#"]):not([href="#0"]):not([data-toggle]):not([target="_blank"])')

	links.forEach(link =>
		link.addEventListener("click", function(event) {
		// On-page links
		if (
			location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
			&&
			location.hostname === this.hostname
		){
			// Does a scroll target exist?
			if (this.hash.length && document.getElementById(this.hash.replace('#', '')).offsetTop > 0){
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				document.querySelector(this.hash).scrollIntoView({
					behavior: 'smooth'
				});
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
		document.querySelector(window.location.hash).scrollIntoView({
			behavior: 'smooth'
		});
	}
}