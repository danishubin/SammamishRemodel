var range1 = document.getElementById("range1");
var before1 = document.getElementById("before1");
var slider1 = document.getElementById("slider1");
var sliderbutton1 = document.getElementById("slider-button1");

var range2 = document.getElementById("range2");
var before2 = document.getElementById("before2");
var slider2 = document.getElementById("slider2");
var sliderbutton2 = document.getElementById("slider-button2");

// Update the current slider value (each time you drag the slider handle)
range1.oninput = function() {
    before1.style.width = this.value + "%";
    slider1.style.left = "calc(" + this.value + "%)";
    sliderbutton1.style.left = "calc(" + this.value + "%)";
}

range2.oninput = function() {
    before2.style.width = this.value + "%";
    slider2.style.left = "calc(" + this.value + "%)";
    sliderbutton2.style.left = "calc(" + this.value + "%)";
}