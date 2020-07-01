const groupArr = ["Greetings", "British", "Compliments", "Love", "Northern", "Mexican't"];

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
  var cTxt = document.getElementById("cTxt");
  var entries = groupArr.length - 1;
  var ms = 100;

  if (cTxt.innerHTML.length > 0) {var txt = cTxt.innerHTML;}

  var pos = groupArr.indexOf(txt);

  console.log(txt);

  switch (id) {
    case "arrowR":
      switch (true) {
        case pos >= 0 && pos < entries:
          gTxt.classList.add("slide-l");
          window.setTimeout(function(){
            cTxt.innerHTML = "";
            gTxt.classList.remove("slide-l");
          }, ms);
          window.setTimeout( function() {
            gTxt.classList.add("slide-r");
            window.setTimeout(function(){
              cTxt.innerHTML = groupArr[pos + 1];
              var txt = cTxt.innerHTML;
              gTxt.classList.remove("slide-r");
              selectGroup(txt);
            }, ms);
          }, (1.1 * ms));
          break;
        case pos == entries:
          gTxt.classList.add("slide-l");
          window.setTimeout(function(){
            cTxt.innerHTML = "";
            gTxt.classList.remove("slide-l");
          }, ms);
          window.setTimeout( function() {
            gTxt.classList.add("slide-r");
            window.setTimeout(function(){
              cTxt.innerHTML = groupArr[0];
              var txt = cTxt.innerHTML;
              gTxt.classList.remove("slide-r");
              selectGroup(txt);
            }, ms);
          }, (1.1 * ms));
          break;
        case pos == -1:
          gTxt.classList.add("slide-r");
          window.setTimeout(function(){
            cTxt.innerHTML = groupArr[0];
            var txt = cTxt.innerHTML;
            gTxt.classList.remove("slide-r");
            selectGroup(txt);
          }, ms);
          break;
      }
      break;
    case "arrowL":
      switch (true) {
        case pos == entries:
          gTxt.classList.add("slide-r");
          window.setTimeout(function(){
            cTxt.innerHTML = "";
            gTxt.classList.remove("slide-r");
          }, ms);
          window.setTimeout( function() {
            gTxt.classList.add("slide-l");
            window.setTimeout(function(){
              cTxt.innerHTML = groupArr[0];
              var txt = cTxt.innerHTML;
              gTxt.classList.remove("slide-l");
              selectGroup(txt);
            }, ms);
          }, (1.1 * ms));
          break;
        case pos < entries && pos >= 0:
          gTxt.classList.add("slide-r");
          window.setTimeout(function(){
            cTxt.innerHTML = "";
            gTxt.classList.remove("slide-r");
          }, ms);
          window.setTimeout( function() {
            gTxt.classList.add("slide-l");
            window.setTimeout(function(){
              cTxt.innerHTML = groupArr[pos - 1];
              var txt = cTxt.innerHTML;
              gTxt.classList.remove("slide-l");
              selectGroup(txt);
            }, ms);
          }, (2 * ms));
          break;
        case pos == -1:
          gTxt.classList.add("slide-l");
          window.setTimeout(function(){
            cTxt.innerHTML = groupArr[entries];
            var txt = cTxt.innerHTML;
            gTxt.classList.remove("slide-l");
            selectGroup(txt);
          }, ms);
          break;
      }
      break;
  }
}

function closeGroups() {
  var iconsGroups = document.querySelectorAll("div.icons");
  var iconGroups = document.querySelectorAll("div.icon");
  iconsGroups.forEach(element => element.classList.add("icons-hide"));
  iconGroups.forEach(element => element.classList.add("icons-hide"));
}

function openGroups() {
  var iconsGroups = document.querySelectorAll("div.icons");
  var iconGroups = document.querySelectorAll("div.icon");
  iconsGroups.forEach(element => element.classList.remove("icons-hide"));
  iconGroups.forEach(element => element.classList.remove("icon-hide"));
}

function resetGroups() {
  var gTxt = document.getElementById("groupTxt");
  cTxt.innerHTML = "";
  openGroups();
}

function selectGroup(txt) {
  closeGroups();

  var grp = document.getElementById(txt);
  var iShow = grp.querySelector("div.icons");

  iShow.classList.remove("icons-hide");
}
