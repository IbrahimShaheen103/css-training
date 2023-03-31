let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let m3 = document.getElementById("mountains3");
let m4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boot = document.getElementById("boat");
let shahin = document.querySelector(".shahin");
window.onscroll = () => {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 3 + "px";
  m3.style.top = value * 2 + "px";
  m4.style.top = value * 1.5 + "px";
  boot.style.top = value + "px";
  boot.style.left = value * 3 + "px";
  shahin.style.fontSize = value + "px";
  if (scrollY >= 67) {
    shahin.style.fontSize = 67 + "px";
    shahin.style.position = "fixed";
    if (scrollY >= 400) {
      shahin.style.display = "none";
      river.style.display = "none";
    } else {
      shahin.style.display = "block";
      river.style.display = "block";
    }
    if (scrollY >= 127) {
      document.querySelector(".main").style.background =
        "linear-gradient(#376281 , #10001f);";
    } else {
      document.querySelector(".main").style.background =
        "linear-gradient(#200016, #10001f);";
    }
  }
};
