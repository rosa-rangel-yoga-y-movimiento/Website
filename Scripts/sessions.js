var sessionIndex = 1;

function plusSession(n) {
  showSession(sessionIndex += n);
}

function currentSession(n) {
  showSession(sessionIndex = n);
}
window.onload = function() {
  showSession(sessionIndex);
}

function showSession(n) {
  var i;
  var session = document.getElementById('headerImg');
  if (n > 3) {sessionIndex = 1}
  if (n < 1) {sessionIndex = 3}
  console.log(sessionIndex);
  if (sessionIndex == 1) {
    console.log("1 p");
    document.title = "Sesiones - Yoga Restaurativa";
    session.style.backgroundImage = "url('Images/YogaResta.jpg')";
  } else if (sessionIndex == 2) {
    console.log("2 p");
    document.title = "Sesiones - Yoga Grupal";
    session.style.backgroundImage = "url('Images/YogaGroup.jpg')";
  } else {
    console.log("3 p");
    document.title = "Sesiones - Taller de Respiración";
    session.style.backgroundImage = "url('Images/Respirar.jpg')";
  }
}
