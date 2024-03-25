console.log('Ciao dal file app.js');

// Chiedere all'utente il suo nome:
// - Dichiarare una variabile 'nome' e gli assegnamo il prompt dell'utente
const nome = prompt('Inserisci il tuo nome'); // string | null
console.log(nome);

// Chiedere all'utente il suo cognome:
// - Dichiarare una variabile 'cognome' e gli assegnamo il prompt dell'utente
const cognome = prompt('Inserisci il tuo cognome'); // string | null
console.log(cognome);

// Chiedere all'utente il suo colore preferito:
// - Dichiarare una variabile 'colore' e gli assegnamo il prompt dell'utente
const colore = prompt('Inserisci il tuo colore preferito'); // string | null
console.log(colore);

// Dichiarare una variabile numero che contiene il numero 900
const numero = 900; // number

// Generare numero casuale:
// - Creo una funzione con una variabile 'random', utilizzo la funzione Math.floor con Math.random ed assegno min e max
const numeroCasuale1 = Math.floor(Math.random() * 100); // number


// In questo esempio utilizziamo la funzione getRandomIntInclusive e assegnamo 2 valori fra le parentesi, 0 e 100, inizio e fine della funzione random
/*
const numeroCasuale2 = getRandomIntInclusive(0, 100)

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
*/



// Generare la password:
// - Dichiarare una variabile 'password' e assegnargli la concatenazione di 'nome', 'cognome', 'colore' e un numero (es 28)
const password = nome + cognome + colore + /*numero +*/ numeroCasuale1; // string | null
console.log('Nuova Password' + password);

