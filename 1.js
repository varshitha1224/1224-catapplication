let onbulb = document.getElementById("onbulb");
let imagecat = document.getElementById("imagecat");
let switchon = document.getElementById("switchon");
let buttonon = document.getElementById("buttonon");
let buttonoff = document.getElementById("buttonoff");
function onchey() {
  onbulb.src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
  imagecat.src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
  switchon.textContent = "Switch On";
  switchon.style.color = red;
  document.getElementById("buttonon").style.backgroundColor = "green";
  document.getElementById("buttonoff").style.backgroundColor = "green";
}
function offchey() {
  onbulb.src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
  imagecat.src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
  switchon.textContent = "Switch Off";
  switchon.style.color = "red";
  document.getElementById("buttonon").style.backgroundColor = "#cbd2d9";
  document.getElementById("buttonoff").style.backgroundColor = red;
}
