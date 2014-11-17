(function ($) {
  Drupal.behaviors.shortcode_ubc = {
    attach: function (context, settings) {
      // INSERT ACCORDION JQUERY ON EVERY PAGE LOAD 
      $('.panel').find('.panel-tab').once('cstab').on('click', function(e){
        //Expand or collapse this panel
        $(this).next().slideToggle('fast');
        $(this).parent().toggleClass('panel-closed panel-open');
        $(this).find(">:first-child").toggleClass('icon-plus-sign icon-minus-sign');
        e.preventDefault();
        //Hide the other panels - nah
        //$(".accordion-content").not($(this).next()).slideUp('fast');
      });
    }
  };
})(jQuery);