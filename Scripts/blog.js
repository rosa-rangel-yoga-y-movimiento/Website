var blogArray = [];

window.onload = function() {
  databaseConnection(function() {
    loadPosts();
    loadThumbnail();
  });
}

function databaseConnection(callback) {
  var ref = firebase.database().ref().child('/blogs/');
  ref.once('value', function(snapshot) {
    var i = 0;
    snapshot.forEach(function(post) {
      var postVal = post.val();
      blogArray[i] = postVal;
      i += 1;
      console.log(i);
      callback();
    });
  });
}

function loadPosts() {
  var thumbnail_sec = document.getElementById('blog-thumbnails');
  for (var i = 0; i < blogArray.length-1; i++) {
    var anchor = document.createElement("a");
    anchor.href = "#" + blogArray[i].id;
    var divi = document.createElement("div");
    divi.className = "thumbnail";
    var thumbnail = document.createElement("img");
    thumbnail.src = blogArray[i].thumbnail;
    divi.appendChild(thumbnail);
    var title = document.createElement("h2");
    title.innerHTML = blogArray[i].titulo;
    divi.appendChild(title);
    var subtitle = document.createElement("h3");
    subtitle.innerHTML = blogArray[i].subtitulo;
    divi.appendChild(subtitle);
    anchor.appendChild(divi);
    thumbnail_sec.appendChild(anchor);
  }
}

function loadThumbnail() {
  var modal_sec = document.getElementById('blog-modals');
  for (var i = 0; i < blogArray.length-1; i++) {
    var divi = document.createElement("div");
    divi.className = "modal-blog";
    divi.id = blogArray[i].id;
    var anchor = document.createElement("a");
    anchor.title = "Close";
    anchor.className = "close";
    anchor.innerHTML = "X";
    anchor.href = "";
    divi.appendChild(anchor);
    var pdf = document.createElement("object");
    pdf.type = "application/pdf";
    pdf.data = blogArray[i].blog + "#toolbar=0&navpanes=0&scrollbar=0&messages=0&statusbar=0&View=FitBH";
    pdf.className = "pdf";
    // var android_fallback = document.createElement("embed");
    // android_fallback.type = "application/pdf";
    // android_fallback.src = blogArray[i].blog;
    // pdf.appendChild(android_fallback);
    divi.appendChild(pdf);
    modal_sec.appendChild(divi);
    var url = window.location.href.split("#");
    var last = url.pop();
    if (last == blogArray[i].id) {
      if(navigator.userAgent.match(/Android/i)) {
        window.open(blogArray[i].blog);
      }
      console.log("xx");
      var selectedPost = document.getElementById(blogArray[i].id);
      selectedPost.className += " selected"
      selectedPost.opacity = "1";
      selectedPost.zIndex = "99999";
      selectedPost.pointerEvents = "auto";
      selectedPost.cursor = "default";
      console.log(selectedPost);
    }
  }
}
