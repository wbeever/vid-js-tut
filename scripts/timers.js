//broken

function timer5Seconds() {
    alert("This is the 5 second timer");
}

//setTimeout(timer5Seconds,5000)

var myImage = document.getElementById("image");
var arrayImage = ["images/paint1.png", "images/paint2.png", "images/paint3.png"];
var imageIndex = 0;

function changeImage() {
    myImage.setAttribute("src", arrayImage[imageIndex]);
    imageIndex++;
    if (imageIndex >= arrayImage.length) {
        imageIndex = 0;
    }
}

setInterval(changeImage, 3000);