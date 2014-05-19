//splash 
function resizesplash() {
      var heights = window.innerHeight;
      document.getElementById("splash").style.height = heights -64 + "px";
  }

  resizesplash();
  window.onresize = function() {
      resizesplash();
};

//splash 
function resizeprojects() {
      var heights = window.innerHeight;
      document.getElementById("projects").style.height = heights + "px";
  }

  resizeprojects();
  window.onresize = function() {
      resizesplash();
};

// //splash 
// function resizeprocess() {
//       var heights = window.innerHeight;
//       document.getElementById("process").style.height = heights + "px";
//   }

//   resizeprocess();
//   window.onresize = function() {
//       resizeprocess();
// };