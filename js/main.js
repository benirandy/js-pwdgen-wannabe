//Devo creare un Password generator


/*

Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito,
E infine devo fare aparire sia il nome,il cognome e il suo colore preferito sulla pagina.


*/

let nomeDellapersona = prompt('Inserisci il tuo nome');


const cognomeDellapersona = prompt('inserisci il tuo cognome');


let coloreDellapersona = prompt('inserisci il tuo colore preferito');


const numeroDellapersona = parseInt('23')

const password = nomeDellapersona + cognomeDellapersona + coloreDellapersona + numeroDellapersona;

console.log(password)

document.getElementById('password').innerHTML = `La tua password è ${password}`;


