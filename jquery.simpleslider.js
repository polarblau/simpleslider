/*!
 * Simple Slider jQuery plugin
 *
 * Copyright (c) 2012 Florian Plank (http://www.polarblau.com/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * USAGE:
 * 
 * $('.simpleslider').simpleslider({
 *   'pagination': '.pagination li',
 *   'nextPage'  : 'a.next',
 *   'prevPage'  : 'a.prev',
 *   'content'   : '.content',
 *   'slides'    : 'li',
 *   'transition': {
 *     'duration'  : 500,
 *     'complete'  : function() {}
 *   }
 * });
 * 
 */

(function($) {
  $.fn.simpleslider = function(options) {

    var settings = $.merge({
      'pagination': '.pagination li',
      'nextPage'  : 'a.next',
      'prevPage'  : 'a.prev',
      'content'   : '.content',
      'slides'    : 'li',
      'transition': {
        'duration'  : 500,
        'complete'  : function() {}
      }
    }, options || {});

    return this.each(function() {

      var $this        = $(this),
          $content     = $this.find(settings.content),
          currentIndex = 0,
          contentWidth = 0,
          slidesSizes  = [];

      slidesSizes = $content.find(settings.slides).map(function() {
        return $(this).width();
      });

      contentWidth = sum(slidesSizes);

      $content.css('width', contentWidth + 'px')

      $this
        .on('click', settings.pagination, function(e) {
          e.preventDefault()
          slideTo($(this).index());
        })
        .on('click', settings.nextPage, function(e) {
          e.preventDefault()
          slideTo(currentIndex + 2 > slidesSizes.length ? 0 : currentIndex + 1);
        })
        .on('click', settings.prevPage, function(e) {
          e.preventDefault()
          slideTo(currentIndex - 1 < 0 ? slidesSizes.length - 1 : currentIndex - 1);
        });

      function slideTo(index) {
        currentIndex = index;
        var offset = sum(slidesSizes.slice(0, index));
        $content.animate({
          'left': (offset * -1) + 'px'
        }, settings.transition);
      }

      function sum(list) {
        var sum = 0;
        $.each(list, function() { sum += this; });
        return sum;
      }

    });
  };
})(jQuery);