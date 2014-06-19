
var shiftWindow = function () {
  var hash = window.location.hash;
  if (hash != "") {
    $(documnet).scrollTop($(hash).offset().top) - $(".navbar-fixed-top".height());
  }
}

if (window.location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);