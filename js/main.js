// Important line
	"use strict";

window.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

var _navigator = navigator.userAgent.toLowerCase(),
	_platform  = navigator.platform.toLowerCase();

window.is_safari  = ( _navigator.indexOf('safari') != -1 && _navigator.indexOf('chrome') == -1 );
window.is_firefox = _navigator.indexOf('firefox') > -1;
window.is_ie 	  = _navigator.indexOf('msie') > -1;

window.is_win = _platform.indexOf('win') > -1;

// SETTINGS
window.parallax_enabled  = true; // Turn on/off "Parallax Effect"
window.preloader_enabled = true; // Turn on/off "Preloader"

window.scrollTo(0, 0);

(function($) {

	// All jQuery scripts must be here

	function on_load() {
		
		// FOOTER
		var $footer_sections = $('#footer section');
		
		var footer_align = function() {
			if ( $footer_sections.length > 0 && windowWidth > 400 ) {
				$footer_sections
					.css({ left: '100%', opacity: 0 })
					.first().removeAttr('style');
				
				if ( $('#last-section').length > 0 ) {
					$('#last-section nav li:first-child a').trigger('click');
				}
			} else {
				$footer_sections.removeAttr('style');
			}
		}
	}
	
	// LAST SECTION NAVIGATION (ON CLICK)
	function last_section_nav(e) {
		
		e.preventDefault();
		
		var $this = $(this),
			prev_id = '#' + $this.parents('ul').find('.current').data('page');
				
		if ( $this.hasClass('current') ) {
			return false;
		}
		
		$this.parents('ul').find('a').removeClass('current');
		$this.addClass('current');
		
		// Move triangle
		//align_triangle();
		
		// Move block
		var id = '#' + $this.data('page');
		
		if ( $(id).index() > $(prev_id).index() ) {
			// Forward
			
			$(prev_id).transition({ left: - $(prev_id).width(), opacity: 0 });
			$(id).css({ left: '100%' }).transition({ left: 0, opacity: 1 });
			
		} else {
			// Back
			
			$(prev_id).transition({ left: '100%', opacity: 0 });
			$(id).css({ left: -$(id).width() }).transition({ left: 0, opacity: 1 });
		}
	}

	// BINDS

	$( window ).load(function() {
	  	var $footer_sections = $('#footer section');
			
		if ( $footer_sections.length > 0) {
			$footer_sections
				.css({ left: '100%', opacity: 0 })
				.first().removeAttr('style');
			
			if ( $('#last-section').length > 0 ) {
				$('#last-section nav li:first-child a').trigger('click');
			}
		} else {
			$footer_sections.removeAttr('style');
		}
	});

	$(document)
		.on('click', '#last-section nav a', last_section_nav)
			
})(jQuery);