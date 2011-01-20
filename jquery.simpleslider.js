/*!
 * Simple Slider jQuery plugin
 *
 * Copyright (c) 2011 Florian Plank (http://www.polarblau.com/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * USAGE:
 * 
 * $('.simpleslider').simpleslider({
 *   "controls"           : $('.controls'),   // selector or jquery object
 *   "content"            : '.content',       // selector or jquery object
 *   "transitionDuration" : 500               // duration in ms
 * });
 * 
 */

(function($) {
	$.fn.simpleslider = function(options) {
		
		// defaults
		var settings = $.merge({
			"controls": '.controls',
			"content": '.content',
			"transitionDuration" : 500
		}, options || {});

		return $(this).each(function(i, e) {

			var $e = $(e),
			    $controls = $e.find('li', settings.controls),
			    $content = $e.find(settings.content),
			    sizes = [],
			    contentWidth = 0;

			// determine sizes of slides
			$content.find('li').map(function(j, li) {
				var liWidth = $(li).width();
				contentWidth += liWidth;
				sizes.push(liWidth);
			})
			$content.css('width', contentWidth + 'px');

			$controls.click(function() {
				// determine offset 
				var controlIndex = $(this).index(),
					offset = (function(s) {
					var w = 0; $.each(s, function(k, e) { w += e; }); return w;
				})(sizes.slice(0, controlIndex));

				// slide content to correct position
				$content.animate({
					'left': (offset * -1) + 'px'
				}, settings.transitionDuration);
				return false;
			});
		});
		
	};
})(jQuery);
