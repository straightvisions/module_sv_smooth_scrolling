jQuery(document).ready(function(){
	// Select all links with hashes
	jQuery('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.not('[data-toggle]')
		.not('[target="_blank"]')
		.click(function(event){
		// On-page links
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
			&& 
			location.hostname == this.hostname
		){
			// Figure out element to scroll to
			var target					= jQuery(this.hash);
			target						= target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');

			// Does a scroll target exist?
			if (target.length && target.offset().top > 0){
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				jQuery('html, body').animate({
					scrollTop: target.offset().top
				}, 500, function(){
					// Callback after animation
					// Must change focus!
					var jQuerytarget	= jQuery(target);
					jQuerytarget.focus();
                    if (jQuerytarget.is(":focus")){ // Checking if the target was focused
                        return false;
                    }else{
                        jQuerytarget.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        jQuerytarget.focus(); // Set focus again
                    };
				});
			}
		}
	});
});

// to top right away
if ( window.location.hash ) scroll(0,0);
// void some browsers issue
setTimeout( function() { scroll(0,0); }, 1);

jQuery(document).ready(function(){
    // *only* if we have anchor on the url
    if(window.location.hash){
        // smooth scroll to the anchor id
		if(typeof window.location.href.split("#view=")[1] != 'undefined' && window.location.href.split("#view=")[1].length == 0){ // compatibility for section loading
			jQuery('html, body').animate({
				scrollTop: jQuery(window.location.hash).offset().top + 'px'
			}, 500, 'swing');
		}
    }
});