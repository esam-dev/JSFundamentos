
// Aplicar Operaciones aritmeticas sobre dos numeros ingresados por el usuario 

const  prompt = require('prompt-sync')();

let n1 = parseInt(prompt("Escribe primer numero : "));
let n2 =parseInt(prompt ("Escribe segundo numero :"));

let suma =  n1 + n2
let resta = n1 - n2
let  multiplicacion = n1 * n2
let division = n1 / n2
console.log( "La suma es : ", suma);
console.log("La resta es :", resta);
console.log( "La Multiplicacion es :", multiplicacion);
console.log( "La division es :", division);

