var coUnt = 0;

while (coUnt < 10) { //checks condition before loop
    document.write("While loop: " + coUnt + "<br>");
    coUnt++;
}

do { //checks condition after loop
    document.write("Do loop: " + coUnt + "<br>");
    coUnt++;
}
while (coUnt < 5);

for (coUnt = 10; coUnt < 15; coUnt++) {
    document.write("For loop: " + coUnt + "<br>");
}

/*
for (coUnt forin in object) {
    need to learn objects!
}
*/