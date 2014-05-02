//about
function resizeabout() {
      var heights = window.innerHeight;
      document.getElementById("about").style.minHeight = heights + "px";
  }

  resizeabout();
  window.onresize = function() {
      resizeabout();
};