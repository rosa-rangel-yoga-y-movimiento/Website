document.getElementById('logForm').addEventListener('submit', login);

function login(e) {
  e.preventDefault();
  var mail = getInputValues('mail');
  var password = getInputValues('password');
  signIn(mail, password);
}

function getInputValues(id) {
  return document.getElementById(id).value;
}

function signIn(mail, password) {
  firebase.auth().signInWithEmailAndPassword(mail, password).then(function(){
    alert("Inicio de sesión exitoso");
    document.getElementById('button').disabled = true;
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(function() {
    return firebase.auth().signInWithEmailAndPassword(mail, password);
  }).catch(function(error) {alert(error)});
  firebase.auth().onAuthStateChanged(function(user){
    if(user){
      window.location = "formulario_eventos.html";
    }
  })
  }). catch(function(error) {alert(error)});
}

window.onload = function() {
  checkAuthStatus();
}

function checkAuthStatus() {
  var user = firebase.auth().currentUser;
  if (user) {
    window.location.replace('formulario_eventos.html');
  console.log("si");
  } else {
    console.log("no");
  }
}
