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
    $('#mask').fadeOut('2000');
});

