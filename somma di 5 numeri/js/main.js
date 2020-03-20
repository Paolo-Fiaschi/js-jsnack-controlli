// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

// chiedere all'utente il 1 numero
var num1 = parseInt(prompt ("Scegli il primo numero"));
// chiedere all'utente il 2 numero
var num2 = parseInt(prompt ("Scegli il secondo numero"));

// chiedere all'utente il 3 numero
var num3 = parseInt(prompt ("Scegli il terzo numero"));

// chiedere all'utente il 4 numero
var num4 = parseInt(prompt ("Scegli il quarto numero"));

// chiedere all'utente il 5 numero
var num5 = parseInt(prompt ("Scegli il quinto numero"));

// var della somma dei 5 numeri
var somma;

console.log(num1, num2, num3, num4, num5);

// fare la somma dei 5 numeri
somma = num1 + num2 + num3 + num4 + num5;

console.log(somma);

// outut della somma dei 5 numeri
document.getElementById('somma').innerHTML = "La somma dei numeri da te inseriti è: " + somma;
