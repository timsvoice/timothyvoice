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

$('.projects-container').stickem({
   item: '.projects-summary',
   container: '.projects-single-container',
   stickClass: 'stickit',
   endStickClass: 'stickit-end',
   offset: 0,
   onStick: null,
   onUnstick: null
 });
