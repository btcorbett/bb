function access() {
  /*
  var user = document.getElementById("user-in");
  var pass = document.getElementById("pass-in");
  var resp = document.getElementById("resp");
  var user_l = user.value.length;
  var pass_l = user.value.length;
  */

  window.open("board.html", "_self");
}

function iconPlay(id) {
  var aud = new Audio("audio/" + id + ".mp3");

  aud.play();
}
