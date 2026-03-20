
// EJERCICIOS DE APROPIACION - Operadores en JavaScript
// Tecnico en Programacion de Software - SENA
// EJERCICIO 1: El terreno rectangular//


let base = 10;   //base
let altura = 5; //altura

// El area se calcula multiplicando base por altura//
let area = base * altura;

// El perimetro se calcula sumando todos los lados//
let perimetro = 2 * base + 2 * altura;

console.log("--- Ejercicio 1: El terreno rectangular ---");
console.log("Base:", base, "metros");
console.log("Altura:", altura, "metros");
console.log("Area:", area, "metros cuadrados");
console.log("Perimetro:", perimetro, "metros");
//imoprimimos en la consola //

// ejercicio 2 //
let nota1 = 4.5;
let nota2 = 3.8;
let nota3 = 3.2;
 
// El promedio es la suma de las notas dividida entre la cantidad
let promedio = (nota1 + nota2 + nota3) / 3;
 
console.log("\n--- Ejercicio 2: Las tres notas del estudiante ---");
console.log("Nota 1:", nota1);
console.log("Nota 2:", nota2);
console.log("Nota 3:", nota3);
console.log("Promedio:", promedio.toFixed(2));
 
// ejercicio 3//
let contador = 100;  // visitas iniciales
 
// Recibe 25 visitas adicionales
contador += 25;      // esto es lo mismo que: contador = contador + 25
 
// Pierde 10 por error de registro
contador -= 10;      // esto es lo mismo que: contador = contador - 10
 
// Se duplican las visitas
contador *= 2;       // esto es lo mismo que: contador = contador * 2
 
console.log("\n--- Ejercicio 3: El contador de visitas ---");
console.log("Valor final del contador:", contador);

//ejercicio 4// 
let resultado = (20 + 10) / 5 + 3 * 2 - 4;
 
console.log("\n--- Ejercicio 4: La operacion misteriosa ---");
console.log("Expresion: (20 + 10) / 5 + 3 * 2 - 4");
console.log("Resultado:", resultado);

