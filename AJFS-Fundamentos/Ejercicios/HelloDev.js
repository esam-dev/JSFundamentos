// Javascript Repaso General
//Variables 
let edadUsuario = 23;
let nombreUsuario = "Elias";
console.log("====Programa Iniciando====");
console.log("====Variables====");
console.log("Hello, Dev !!");
console.log("=================");
console.log("Tu edad es:",edadUsuario);
console.log("Tu mombre es :", nombreUsuario);

// Constantes 
console.log("====Constantes====");
const pi = 3.1416;
const velocidadLuz = 300000;
console.log("Valor de pi:", pi);
console.log("Velocidad de la Luz:", velocidadLuz);
console.log("====Programa Finalizado====");

//  Mostrar informacion en la pantalla 
console.log("Linea  1 del mensaje que se muestra por la consola");
console.log("Linea  2 del mensaje que se muestra por la consola");

// Mostrar texto al almacenado en una variable 
let texto = "El primer texto de la variable ";
console.log(texto);
texto = "El segundo texto de la variable"
console.log(texto);

// Mostrar texto y leer variables en la misma sentencia 
let textoMostrar = "Elias ";
console.log("Mi nombre es :",textoMostrar);

let texto1 ="Texto 1 ";
let texto2 = "Texto 2 ";
console.log(texto1, texto2);

let textoEdad = 23;
console.log("Mi edad es %s años", textoEdad);

let textoM = 23;
console.log("Mi edad es %s años y vivo en %s", textoM ,"Asuncion");

//Lectura de informacion que ingresa el usuario
const prompt = require("prompt-sync")();
let informacionLeida = prompt("Escribe algo:");
console.log("Has escrito :", informacionLeida);