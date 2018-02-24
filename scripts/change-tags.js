
var para1 = document.getElementById("p1");

para1.innerHTML = "I changed the text by using javascript";

var createPTag = document.createElement("p"); //created a var
createPTag.innerHTML = "I just created a new p tag"; //populates the var
document.getElementById("maincontainer").appendChild(createPTag); //appends var to 'ID'

var createText = document.createTextNode("this is another text node");
document.getElementById("maincontainer").appendChild(createText);


console.log("What is this element: ", para1.nodeType);
console.log("This is the inner Html: ", para1.innerHTML);
console.log("Does it have any children: ", para1.childNodes);

var navig = document.getElementsByTagName("li");
var test2 = navig.getElementsByTagName("a");

console.log("We have : ", navig.length , "items.");