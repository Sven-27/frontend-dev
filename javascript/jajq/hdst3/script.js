let num1 = prompt("Vul een getal in");
let num2 = prompt("Vul nog een getal in");

// let bigger = (parseInt(num1) > parseInt(num2)) ? true : false;
// let smaller = (parseInt(num1) < parseInt(num2)) ? true : false;
let compare = parseInt(num1) > parseInt(num2) ? num1 + " is groter dan " + num2 : parseInt(num1) < parseInt(num2) ? num1 + " is kleiner dan " + num2 : "is equal";

document.write("De getallen die u invoerde waren " + num1 + " en " + num2 + "<br><br>");

document.write(compare);
// document.write("Is het eerste getal kleiner dan het tweede getal? " + smaller + "<br>");
// document.write("Is het eerste getal gelijk aan het tweede getal? " + equal);