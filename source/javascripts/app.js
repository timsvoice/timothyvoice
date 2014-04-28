$(document).foundation();

function resize() {
      var heights = window.innerHeight;
      document.getElementById("splash").style.height = heights -32 + "px";
  }

  resize();
  window.onresize = function() {
      resize();
};

$(window).load(function () {
    $('#mask').fadeOut('3000');
});

//sticky nav

$(document).ready(function() {
var stickyNavTop = $('.projects-summary').offset().top;
 
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
     
if (scrollTop > stickyNavTop) {
    $('.projects-summary').addClass('sticky');
} else {
    $('.projects-summary').removeClass('sticky');
}
};
 
stickyNav();
 
$(window).scroll(function() {
  stickyNav();
});
});
