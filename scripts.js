/*
var i = 0;
function change() {
  var doc = document.getElementById("background");
  var color = ["#cc0000", "#9b041e"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 5000);
*/


var i = 0;
function change() {
  var doc = document.getElementById("panel-1");
  var opacity = ["1", "0.5"];
  doc.style.opacity = opacity[i];
  i = (i + 1) % opacity.length;
}
setInterval(change, 5000);


function show(){
    document.getElementById("panel-1").style.display = "none";
    document.getElementById("panel-2").style.display = "block";
}

function hide(){
    document.getElementById("panel-1").style.display = "block";
    document.getElementById("panel-2").style.display = "none";
}




function play() {
    var audio = document.getElementById("audio");
    audio.play();
    document.getElementById("play").style.display = "none";
    document.getElementById("pause").style.display = "block";
}

function pause() {
    var audio = document.getElementById("audio");
    audio.pause();
        document.getElementById("play").style.display = "block";
    document.getElementById("pause").style.display = "none";
}