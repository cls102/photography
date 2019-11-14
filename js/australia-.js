let toggleNavStatus = false;

let toggleNav = function() {
  let getSidebar = document.querySelector(".mobile-sidebar");
  let getSidebarUl = document.querySelector(".mobile-sidebar ul");

  if (toggleNavStatus === false) {
    getSidebar.style.visibility = "visible";
    getSidebarUl.style.visibility = "visible";

    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getSidebar.style.visibility = "hidden";
    getSidebarUl.style.visibility = "hidden";
    getSidebar.style.width = "100%";

    toggleNavStatus = false;
  }
};

var index = 0;
var images = [];
// var time = 3000;

images[0] = "img/australia-.jpg";
images[1] = "img/madrid-.jpg";
images[2] = "img/ireland-.jpg";
images[3] = "img/tokyo-.jpg";
images[4] = "img/switzerland-.jpg";
images[5] = "img/london-.jpg";
images[6] = "img/skyline-.jpg";
images[7] = "img/losangeles1-.jpg";
images[8] = "img/southafrica-.jpg";
images[9] = "img/newyork-.jpg";
images[10] = "img/toronto-.jpg";
images[11] = "img/brazil-.jpg";

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
