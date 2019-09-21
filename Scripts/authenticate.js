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
    checkAuthStatus();
    document.getElementById('button').disabled = true;
    }).catch(function(error) {alert(error)});
}

window.onload = function() {
  checkAuthStatus();
}

function checkAuthStatus() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      alert("Bienvenida de nuevo, Rosa")
      console.log(user);
      window.location = "formulario_eventos";
    } else {
      console.log("no");
    }
  });
}
