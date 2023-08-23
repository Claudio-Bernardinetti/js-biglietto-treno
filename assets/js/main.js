/* DESCRIZIONE
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca nella documentazione di JS.
 */

// Chiedere all'utente il numero di chilometri

const userKm = Number(prompt('Quanti km vuoi percorrere?'));

// Chiedere all'utente l'età del passeggero

const userAge = Number(prompt('Quanti anni hai?'));

// Calcolare il prezzo totale del viaggio, Il prezzo del biglietto è definito in base ai km (0.21 € al km)

const calcTicketPrice = userKm * 0.21;

// Sconto del 20% per i minorenni - Sconto del 40% per gli over 65

let calcTicketDiscount;

if (userAge < 18) {
    calcTicketDiscount = calcTicketPrice - calcTicketPrice * .20;
    console.log(`Il costo del tuo biglietto e' di € ${calcTicketDiscount.toFixed(2)}`);
} else if(userAge > 65) {
    calcTicketDiscount = calcTicketPrice - calcTicketPrice * .40;
    console.log(`Il costo del tuo biglietto e' di €${calcTicketDiscount.toFixed(2)}`);
} else {
    console.log(`Il costo del tuo biglietto e' di €${calcTicketPrice.toFixed(2)}`);
}
// L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo)

//console.log(calcTicketDiscount.toPrecision(3));