var shiftWindow = function() { scrollBy(0, -65) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);