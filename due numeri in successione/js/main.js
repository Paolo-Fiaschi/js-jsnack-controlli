// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.


// l'utente inserisce un numero
var num1 = parseInt(prompt("Inserisci il primo numero"));

// l'utente inserisce un altro numero
var num2 = parseInt(prompt("Inserisci il secondo numero"));

// dichiarare la var del numero maggiore
var numMaggiore;

console.log(num1, num2);

// verificare quale numero è il maggiore 1
if (num1 > num2) {
  numMaggiore = "Il numero maggiore è: " + num1;
} else if (num2 > num1){
  numMaggiore = "Il numero maggiore è: " + num2;
} else {
  numMaggiore = "I due numeri hanno lo stesso valore ed è: " + num1;
}

console.log(numMaggiore);

// output del numero maggiore
document.getElementById('numMaggiore').innerHTML = numMaggiore;
