window.onload = function() {
  checkAuthStatus();
}

function checkAuthStatus() {
  var user = firebase.auth().currentUser;
  if (user) {
    // window.location.replace('formulario_eventos.html');
  console.log("si");
  } else {
    console.log("no");
  }
}
