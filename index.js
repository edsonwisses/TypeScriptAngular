//1 - number
var x = 10;
console.log(x);
x = 16;
console.log(typeof x);
var y = 15.5884848;
console.log(typeof y);
console.log(y.toPrecision(3));
//2- string
var firstName = "Edson";
console.log(firstName.toUpperCase());
var fullName;
var lastName = "Wisses";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
//3 - boolean
var a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
//4 - inferencie e annotation
var ann = "Teste"; //aqui o tipo foi definido por annotation
var inf = "Teste"; // aqui o tipo foi definido por inference
//repare que ele não aceita valores que não sejam string
ann = 1;
inf = 1;
