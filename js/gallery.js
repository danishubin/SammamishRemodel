var current = 0;
var afterImages = ["images/After\ 1.PNG", "images/After\ 2.PNG", "images/After\ 3.PNG"]
var beforeImages = ["images/Before\ 1.PNG", "images/Before\ 2.PNG", "images/Before\ 3.PNG"]

var gallery = document.getElementById("gallery");
var left = document.getElementById("left");
var right = document.getElementById("right");
var after = document.getElementById("after");
var before = document.getElementById("before");
var slider = document.getElementById("slider");
var sliderbutton = document.getElementById("slider-button");
var range = document.getElementById("range");

left.addEventListener('click', function handleClick() {
    current -= 1;
    if (current < 0) {
        current = afterImages.length - 1;
    }
    setImage();
});

right.addEventListener('click', function handleClick() {
    current += 1;
    if (current >= afterImages.length) {
        current = 0;
    }
    setImage();
});

// Update the current slider value (each time you drag the slider handle)
range.oninput = function() {
    before.style.width = this.value + "%";
    slider.style.left = "calc(" + this.value + "%)";
    sliderbutton.style.left = "calc(" + this.value + "%)";
}

function setImage() {
    before.src = beforeImages[current];
    after.src = afterImages[current];
}