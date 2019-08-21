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
  document.getElementById('dia').innerHTML = "Día: " + eventArray[0].date;
  document.getElementById('hora').innerHTML = "Hora: " + eventArray[0].time;
  document.getElementById('clase').innerHTML = "Tipo de sesión: " + eventArray[0].class;
  document.getElementById('lugar').innerHTML = "Lugar: " + eventArray[0].place;
  document.getElementById('costo').innerHTML = "Costo: " + eventArray[0].cost;
  document.getElementById('anfitrion').innerHTML = "Anfitrion(es): " + eventArray[0].host;
  document.getElementById('duracion').innerHTML = "Duración: " + eventArray[0].duration;
  document.getElementById('cuenta').innerHTML = "Cuenta: " + eventArray[0].account;
  document.getElementById('estacionamiento').innerHTML = "Estacionamiento: " + eventArray[0].parking;
}
