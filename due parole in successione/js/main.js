// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.


// chiedere la prima parola
var parola1 = prompt("Inserisci la prima parola") ;
// chiedere la seconda parola
var parola2 = prompt("Inserisci la seconda parola");
// dichiarare la parola più corta e più lunga
var ordineFinale;

console.log(parola1.length, parola2.length);

// verificare quale parola è più lunga e quale più corta
if (parola1.length < parola2.length) {
  ordineFinale = "L'ordine delle parole dalla più corta alla più lunga è: " + parola1 + " ---> " + parola2;
} else if (parola2.length < parola1.length) {
  ordineFinale = "L'ordine delle parole dalla più corta alla più lunga è: " + parola2 + " ---> " + parola1;
} else{
  ordineFinale = "Entrambe le parole sono: " + parola1;
}

console.log(ordineFinale);

// output del messaggio
document.getElementById('ciao').innerHTML = ordineFinale;
