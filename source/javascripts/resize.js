//splash 
function resizesplash() {
      var heights = window.innerHeight;
      document.getElementById("splash").style.height = heights -64 + "px";
  }

  resizesplash();
  window.onresize = function() {
      resizesplash();
};