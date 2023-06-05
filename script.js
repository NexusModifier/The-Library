$(window).on('scroll', function() {
    $('header, section').each(function() {
      var windowHeight = $(window).height();
      var scrollHeight = $(window).scrollTop();
      var offsetTop = $(this).offset().top;
      
      if (scrollHeight + windowHeight > offsetTop) {
        $(this).addClass('show');
      }
    });
  });
  