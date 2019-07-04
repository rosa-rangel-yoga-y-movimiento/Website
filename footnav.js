function navHide() {
  var x = document.getElementById("myScroll");
  if (x.className === "navbar") {
    x.className += " responsive";
    document.getElementById("rosaButton").innerHTML = "Rosa Rangel";
    document.getElementById("facebookButton").innerHTML = "Facebook";
    document.getElementById("instagramButton").innerHTML = "Instagram";
    document.getElementById("youtubeButton").innerHTML  = "YouTube";
  } else {
    x.className = "navbar";
    document.getElementById("rosaButton").innerHTML = "Rosa R.";
    document.getElementById("facebookButton").innerHTML = " ";
    document.getElementById("instagramButton").innerHTML = " ";
    document.getElementById("youtubeButton").innerHTML  = " ";
  }
}
window.onscroll = function() {stickyNav()};
var header = document.getElementById("myScroll");
var sticky = header.offsetTop;
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("navbar");
  } else {
    header.classList.remove("navbar");
  }
}
