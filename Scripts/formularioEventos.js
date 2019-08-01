window.onload = function() {
  checkAuthStatus();
}

function checkAuthStatus() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user);
    } else {
      console.log("no");
    }
  });
}

document.getElementById('form').addEventListener('submit', crearEvento);

function crearEvento(e) {
  e.preventDefault();
  var db = firebase.database();
  var dia = getInputValues('dia');
  var hora = getInputValues('hora');
  var clase = getInputValues('clase');
  var lugar = getInputValues('lugar');
  var costo = getInputValues('costo');
  var anfitrion = getInputValues('anfitrion');
  var duracion = getInputValues('duracion');
  var cuenta = getInputValues('cuenta');
  var estacionamiento = document.getElementById('estacionamiento').checked;
  var imagen = getInputValues('imagen');
  var eventData = {
    date: dia,
    time: hora,
    class: clase,
    place: lugar,
    cost: costo,
    host: anfitrion,
    duration: duracion,
    account: cuenta,
    parking: estacionamiento,
    image: imagen
  }
  var newEventKey = db.ref().child('eventos').push().key;
  db.ref('eventos/' + newEventKey).set({eventData})
  alert("Evento creado exitosamente!")
}

function getInputValues(id) {
  return document.getElementById(id).value;
}
