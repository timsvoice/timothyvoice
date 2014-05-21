$(document).foundation();

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 250);
        return false;
      }
    }
  });
});

$(window).load(function () {
    $('#mask').add('#projectmask').fadeOut('3000');
});

$(document).ready(function() {
 
  $("#ggs-carousel").owlCarousel({
    items : 1,
    itemsDesktop : 1,
    itemsDesktopSmall : 1,
    itemsTablet : 1,
    mouseDrag: true,
    lazyLoad : true,
    navigation : true,
    pagination : false,
    navigationText : [
    '<i class="ion-ios7-arrow-left">',
    '<i class="ion-ios7-arrow-right">'
    ],
    
  });

  $("#octave-carousel").owlCarousel({
    items : 1,
    itemsDesktop : 1,
    itemsDesktopSmall : 1,
    itemsTablet : 1,
    mouseDrag: true,
    lazyLoad : true,
    navigation : true,
    pagination : false,
    navigationText : [
    '<i class="ion-ios7-arrow-left">',
    '<i class="ion-ios7-arrow-right">'
    ],
    
  });

  $('#projects').waypoint(function() {
   $( ".project-links" ).addClass( "animated fadeInRight" );
   $( ".project-links" ).removeClass( "hidden" );
  });
 
});



