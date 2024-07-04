$(document).ready(function() {
    'use strict';
    function init() {
        // INLINE SVG
        jQuery('img.svg').each(function (i) {
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');
    
            jQuery.get(imgURL, function (data) {
            var $svg = jQuery(data).find('svg');
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            $img.replaceWith($svg);
            }, 'xml');
        });
    }
    init();
    function mainHeader() {
        var header = jQuery('.header'),
          pos = header.outerHeight();
  
        var lastScroll = 0;
        jQuery(window).scroll(function () {
          var scroll = jQuery(window).scrollTop();
          if (scroll > 5) {
            header.addClass('hsticky bg-white');
          } else {
            header.removeClass('hsticky bg-white');
          }
        //   if (scroll > lastScroll) {
        //     header.removeClass('show-top');
        //   } else {
        //     header.addClass('show-top');
        //   }
        //   lastScroll = scroll;
        });
      }
      mainHeader();
    $('a[href^="#"]:not(.btt)').on('click', function(event) {
        event.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            scrollTop: $target.offset().top
        }, 800, function() {
            window.location.hash = target;
        });
    });

    $('.mode').each(function() {
        $(this).click(function(){
            $('html').toggleClass('dark');
        })
    })

    // Back to Top
  function backtotop(){
    // Set the offset value to 1/4 of the window height
    var offset = $(window).height() / 8;

    // Hide the back-to-top button on page load
    $('.btt').addClass('hidden').removeClass('show');
    // $('.btt').html('<i class="ic"></i> <span>back to top</span>')

    // Show/hide the back-to-top button based on the scroll position
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.btt').addClass('show').removeClass('hidden');
      }
      else {
        $('.btt').removeClass('show').addClass('hidden');
      }
      if ($(this).scrollTop() == 0) {
        $('.btt').removeClass('show').addClass('hidden');
      }
    });

    // Scroll to top when the back-to-top button is clicked
    $('.btt').click(function() {
      if($('.home').length > 0){
        // $('html, body').animate({ // animasikan scroll ke elemen target
        //   scrollTop: $('#2').offset().top
        // }, 'slow'); // durasi animasi (dalam milidetik)
        $('body .onepage-pagination a[href="#1"]').trigger('click');
      }else{
        $('html, body').animate({scrollTop: 0}, 'slow');
      }
    });


  }
  backtotop();

  function toggleModal(modalId) {
    $(modalId).toggleClass('hidden');
    $('.modal-backdrop').toggleClass('hidden');
  }

  $('.open-modal').click(function() {
      const modalId = $(this).data('modal-target');
      toggleModal(modalId);
  });

  $('.close-modal').click(function() {
      const modalId = $(this).closest('.modal').attr('id');
      toggleModal('#' + modalId);
  });

  $('.modal-backdrop').click(function() {
      $('.modal').addClass('hidden');
      $(this).addClass('hidden');
  });

});