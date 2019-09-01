var eventArray = [];
window.onload = function() {
  databaseConnection(function() {
    changeEventVal();
  })
}

function databaseConnection(callback) {
  var ref = firebase.database().ref().child('/eventos/');
  ref.once('value',function(snap) {
    var i = 0;
      snap.forEach(function(item) {
          var itemVal = item.val();
          eventArray[i] = itemVal;
          i += 1;
          callback();
      });
  });
}

function changeEventVal() {
  document.getElementById('dia').innerHTML = "El día del evento es el " + eventArray[eventArray.length-1].date + ", ¡te esperamos!";
  document.getElementById('hora').innerHTML = "Hora: " + eventArray[eventArray.length-1].time;
  document.getElementById('clase').innerHTML = "Tipo de sesión: " + eventArray[eventArray.length-1].class;
  document.getElementById('lugar').innerHTML = "Lugar: " + eventArray[eventArray.length-1].place;
  document.getElementById('costo').innerHTML = "Costo: " + eventArray[eventArray.length-1].cost;
  document.getElementById('anfitrion').innerHTML = "Anfitrion(es): " + eventArray[eventArray.length-1].host;
  document.getElementById('duracion').innerHTML = "Duración: " + eventArray[eventArray.length-1].duration;
  document.getElementById('cuenta').innerHTML = "Cuenta: " + eventArray[eventArray.length-1].account;
  if (eventArray[eventArray.length-1].parking) {
    document.getElementById('estacionamiento').innerHTML = "Estacionamiento:  Sí";
  } else {
    document.getElementById('estacionamiento').innerHTML = "Estacionamiento: No";
  }
}
var disp = document.getElementsByClassName("display");
for (var i = 0; i < disp.length; i++) {
  disp[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var display_pane = this.nextElementSibling;
    if (display_pane.style.display === "block")  {
      display_pane.style.display = "none";
    } else {
      display_pane.style.display = "block";
    }
    if (display_pane.style.maxHeight){
      display_pane.style.maxHeight = null;
    } else {
      display_pane.style.maxHeight = display_pane.scrollHeight + "px";
    }
  });
}
document.getElementById("vid").playbackRate = .5;
