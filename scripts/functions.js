function sayHello() {
    document.write("Function works" + "<br>");
}

function calArea(w,h) {
    var area = w * h;
    document.write(area + "<br>");
}

sayHello();

for (coUnt = 0; coUnt < 5; coUnt++) { //see loops.js
    sayHello();
}

calArea(5,5);