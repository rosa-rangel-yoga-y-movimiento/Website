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

var thumbnail_button = document.getElementById('thumbnail');
var thumbnail = "";
var blog_button = document.getElementById('post');
var blog = "";

thumbnail_button.addEventListener('change', function(e) {
  var file = e.target.files[0];
  var storageRef = firebase.storage().ref("thumbnails/" + file.name);
  var task = storageRef.put(file);
  task.on('state_changed',
  function progress(snapshot) {

  },
  function error(err) {

  },
  function complete() {

  });
  storageRef.getDownloadURL().then(function(url) {
    thumbnail = String(url);
  });
  console.log(thumbnail);
});

blog_button.addEventListener('change', function(e) {
  var file = e.target.files[0];
  var storageRef = firebase.storage().ref("blogPdf/" + file.name);
  var task = storageRef.put(file);
  task.on('state_changed',
  function progress(snapshot) {

  },
  function error(err) {

  },
  function complete() {

  });
  storageRef.getDownloadURL().then(function(url) {
    blog = String(url);
  });
  console.log(blog);
});

document.getElementById('form').addEventListener('submit', crearPost);

function crearPost(e) {
  e.preventDefault();
  var db = firebase.database();
  var storage= firebase.storage();
  var titulo = getInputValues('titulo');
  var subtitulo = getInputValues('subtitulo');
  var id = getInputValues('id');
  updateDB(db, id, subtitulo, titulo);
}

function updateDB(db, id, subtitulo, titulo) {
  var newPostKey = db.ref().child('blogs').push().key;
  db.ref("blogs/" + newPostKey).set({
    blog: blog,
    id: id,
    subtitulo: subtitulo,
    thumbnail: thumbnail,
    titulo: titulo
  });
  deleteInfo();
  console.log("algo");
  alert("Post creado exitosamente!");
}

function getInputValues(id) {
  return document.getElementById(id).value;
}

function deleteInfo() {
  document.getElementById('titulo').value = "";
  document.getElementById('subtitulo').value = "";
  document.getElementById('id').value = "";
  thumbnail_button.value = "";
  blog_button.value = "";
}
