var index = 0;
var images = [];
// var time = 3000;

images[0] = "img/tokyo-.jpg";
images[1] = "img/switzerland-.jpg";
images[2] = "img/london-.jpg";
images[3] = "img/skyline-.jpg";
images[4] = "img/losangeles1-.jpg";
images[5] = "img/southafrica-.jpg";
images[6] = "img/newyork-.jpg";
images[7] = "img/toronto-.jpg";
images[8] = "img/brazil-.jpg";
images[9] = "img/australia-.jpg";
images[10] = "img/madrid-.jpg";
images[11] = "img/ireland-.jpg";

function change() {
  document.slider.src = images[index];
  if (index < images.length - 1) {
    index++;
  } else {
    index = 0;
  }
  setTimeout("change()", time);
}
window.onload = change;

function prev() {
  if (index > 0) {
    document.slider.src = images[index - 1];
    index--;
  } else {
    document.slider.src = images[images.length - 1];
    index = images.length - 1;
  }
}

function next() {
  if (index < images.length - 1) {
    document.slider.src = images[index + 1];
    index++;
  } else {
    document.slider.src = images[0];
    index = 0;
  }
}
