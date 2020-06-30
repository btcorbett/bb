const groupArr = ["Greetings", "British", "Compliments", "Love", "Northern"];

document.getElementById("groupTxt").innerHTML = groupArr[0];

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

function groupSlide(id) {
  var arrow = document.getElementById(id);
  var gTxt = document.getElementById("groupTxt");
  var txt = gTxt.innerHTML, pos = groupArr.indexOf(txt), entries = groupArr.length - 1;

  switch (id) {
    case "arrowL":
      switch (true) {
        case pos == 0:
          gTxt.classList.add("slide-l");
          window.setTimeout(function(){
            gTxt.innerHTML = "";
            gTxt.classList.remove("slide-l");
          }, 75);
          window.setTimeout( function() {
            gTxt.classList.add("slide-r");
            window.setTimeout(function(){
              gTxt.classList.remove("slide-r");
              gTxt.innerHTML = groupArr[entries];
            }, 75);
          }, 175);
          break;
        case pos > 0:
        case pos <= entries:
          gTxt.classList.add("slide-l");
          window.setTimeout(function(){
            gTxt.innerHTML = "";
            gTxt.classList.remove("slide-l");
          }, 75);
          window.setTimeout( function() {
            gTxt.classList.add("slide-r");
            window.setTimeout(function(){
              gTxt.classList.remove("slide-r");
              gTxt.innerHTML = groupArr[pos - 1];
            }, 75);
          }, 175);
          break;
      }
      break;
    case "arrowR":
      switch (true) {
        case pos == entries:
          gTxt.classList.add("slide-r");
          window.setTimeout(function(){
            gTxt.innerHTML = "";
            gTxt.classList.remove("slide-r");
          }, 75);
          window.setTimeout( function() {
            gTxt.classList.add("slide-l");
            window.setTimeout(function(){
              gTxt.classList.remove("slide-l");
              gTxt.innerHTML = groupArr[0];
            }, 75);
          }, 175);
          break;
        case pos < entries:
        case pos >= 0:
          gTxt.classList.add("slide-r");
          window.setTimeout(function(){
            gTxt.innerHTML = "";
            gTxt.classList.remove("slide-r");
          }, 75);
          window.setTimeout( function() {
            gTxt.classList.add("slide-l");
            window.setTimeout(function(){
              gTxt.classList.remove("slide-l");
              gTxt.innerHTML = groupArr[pos + 1];
            }, 75);
          }, 175);
          break;
      }
      break;
  }
}

function moveToId() {
  var gTxt = document.getElementById("groupTxt");
  txt = gTxt.innerHTML;
  var group = document.getElementById(txt);
  group.scrollIntoView();
}
