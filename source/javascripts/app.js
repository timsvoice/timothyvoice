$(document).foundation();

//splash 
function resizesplash() {
      var heights = window.innerHeight;
      document.getElementById("splash").style.height = heights -64 + "px";
  }

  resizesplash();
  window.onresize = function() {
      resizesplash();
};

// about
function resizeabout() {
      var heights = window.innerHeight;
      document.getElementById("about").style.minHeight = heights + "px";
  }

  resizeabout();
  window.onresize = function() {
      resizeabout();
};

$(window).load(function () {
    $('#mask').fadeOut('3000');
});

$('.projects-container').stickem({
   item: '.projects-summary',
   container: '.projects-single-container',
   stickClass: 'stickit',
   endStickClass: 'stickit-end',
   offset: 0,
   onStick: null,
   onUnstick: null
 });


$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.top-bar').fadeOut();
     }
    else
     {
      $('.top-bar').fadeIn();
     }
 });


// Hide Header on on scroll down
// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $('top-bar').outerHeight();

// $(window).scroll(function(event){
//     didScroll = true;
// });

// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 250);

// function hasScrolled() {
//     var st = $(this).scrollTop();
    
//     // Make sure they scroll more than delta
//     if(Math.abs(lastScrollTop - st) <= delta)
//         return;
    
//     // If they scrolled down and are past the navbar, add class .nav-up.
//     // This is necessary so you never see what is "behind" the navbar.
//     if (st > lastScrollTop && st > navbarHeight){
//         // Scroll Down
//         $('top-bar').removeClass('nav-up').addClass('nav-down');
//     } else {
//         // Scroll Up
//         if(st + $(window).height() < $(document).height()) {
//             $('top-bar').removeClass('nav-down').addClass('nav-up');
//         }
//     }
    
//     lastScrollTop = st;
// }

// // grab an element
// var myElement = document.querySelector("bottom-fixed");


// var headroom = new Headroom(myElement, {
//   "tolerance": 5,
//   "offset": 205,
//   "classes": {
//     "initial": "bottom-fixed",
//     "pinned": "slideUp",
//     "unpinned": "slideDown",
//     "top": "headroom--top",
//     "notTop": "headroom--not-top"
//   }
// });
// headroom.init();

// // to destroy
// headroom.destroy();


