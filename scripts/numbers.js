//all javascript numbers are float64

var num1 = 5; //integer
var num2 = 3;

document.write(num1 + num2 + "<br>"); //int + int = math + 8

var num3 = "5"; //string
var num4 = "5";
document.write(num3 + num4 + "<br>"); //str + str = strStr = 55

var num5 = 5; 
var num6 = "5";
document.write(num5 + num6 + "<br>"); //int + string = intString = 55


var num7 = 5;
var num8 = "a";
document.write(num7 * num8 + "<br>"); // ->*<- NaN == Not a Number

var num7 = 5;
var num8 = "5";
var num9 = Number(num8); // Number(string) convers to string to variable
document.write(num7 + num9 + "<br>"); // int + int = math = 25


