
const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("Escribe el primero numero con decimales:"));
let numero2 = parseFloat(prompt("Escribe el segundo numero con decimales:"));

//let numero1 = 9.34;
//let numero2 = 3.1;
let resultadoSuma = numero1 + numero2;
let resultadoResta = numero1 - numero2;
let resultadoMultiplicacion = numero1 * numero2;
let resultadoDivision = numero1 / numero2;
let resultadoModulo = numero1 % numero2;
let resultadoPotencia = numero1 ** numero2;

console.log("Numero1 es :",numero1);
console.log("Numero2 es: ",numero2);
console.log("Resultado suma:",resultadoSuma);
console.log("Resultado resta:",resultadoResta);
console.log("Resultado Multiplicacion:", resultadoMultiplicacion);
console.log("Resultado Division:",resultadoDivision );
console.log("Resultado Modulo:", resultadoModulo);
console.log("Resultado Potencia:", resultadoPotencia);
