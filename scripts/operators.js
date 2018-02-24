alert("Page linked to operators.js");

/* 
** comparison/math

+ - * / 
5+5 var+var word+word 
word = word + 10 , word += 10
word = 10 + 10 * 20 , * > +  
word = (10 + 10) * 20 , + > *

= assign
== equal
=== strictly equal

a=a+1 , a+=1 , a++
b=b-1 , b-=1 , b--
alert(a++); == a (value increment AFTER 'a' called)
alert(++a); == a+1 (value incriment BEFORE 'a' called)


!= , === , > , < , >= , <=
*/

var a = 20;
var b = "20";
var c = 30;
var d = 40;

document.write(a, b, c, c, "<br>");

/*
if(a == b){
    document.write("they are == equaler.\n");
}
*/

if (a === b) { /*compares value + types*/
    document.write("they are === equalest.<br>"); //not true
}

else {
    document.write("they are not equal.<br>");
}

/* 
** Logical operators
&& , || , ! == and , or , not
*/

if (a >= b || c <= d) {
    document.write("condition(s) true: a >= b and c <= d.<br>");
}
else {
    document.write("conditions a >= b || c <= d not true.<br>")
}

/*
** Ternary (a = 20, c = 30)
*/
var e = (a > c) ? document.write("true<br>") : document.write("false<br>");
