/* DOM Document Object Model 

*/

var para1 = document.getElementById("p1");
console.log("What is this element: ", para1.nodeType);
console.log("This is the inner Html: ", para1.innerHTML);
console.log("Does it have any children: ", para1.childNodes);

var navig = document.getElementsByTagName("li");

//var test = document.getElementsByTagName("h2"); //no h2 == empty 'test' array

var test2 = navig.getElementsByTagName("a");
console.log("We have : ", navig.length , "items.");
//console.log("We found : ", test2.length , "items.")

