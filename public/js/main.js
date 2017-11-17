
$(document).ready(function () {
  
  //  PARTIALS  //
  
  /**
   * HOME
  */
  
  
  // $.ajaxSetup({
  //   headers:
  //   { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }
  // });

  //  SMOOTH SCROLL
  navbarOffset = $('#navnav').outerHeight();
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - (navbarOffset + 8)
    }, 500, 'easeInOutQuad', function(){
        // window.location.hash = hash;      
    });
  });
  //  SMOOTH SCROLL
 
  //  SCROLL SPY
 $('body').scrollspy({ target: '#navbar', offset: 55 });

  //  NAV ANIMATION
  // $(window).scroll(function() {
  //   if ( $(this).scrollTop() > 15 )
  //     navbar.addClass("barbar");
  //   else
  //     navbar.removeClass("barbar");
  // });
});