// =====================================================
// EJERCICIOS DE APROPIACION - Operadores en JavaScript
// Tecnico en Programacion de Software - SENA
// =====================================================


// -----------------------------------------------------
// EJERCICIO 1: El terreno rectangular
// Un agricultor quiere saber el area y perimetro de su terreno
// -----------------------------------------------------

let base = 10;   // base del terreno en metros
let altura = 5;  // altura del terreno en metros

// El area se calcula multiplicando base por altura
let area = base * altura;

// El perimetro se calcula sumando todos los lados: 2*base + 2*altura
let perimetro = 2 * base + 2 * altura;

console.log("--- Ejercicio 1: El terreno rectangular ---");
console.log("Base:", base, "metros");
console.log("Altura:", altura, "metros");
console.log("Area:", area, "metros cuadrados");
console.log("Perimetro:", perimetro, "metros");


// -----------------------------------------------------
// EJERCICIO 2: Las tres notas del estudiante
// Calcular el promedio de 3 notas
// -----------------------------------------------------

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


// EJERCICIO 3 (EJERCICIO 4 en la guia): El contador de visitas


let contador = 100;  // visitas iniciales

// Recibe 25 visitas adicionales
contador += 25;      // esto es lo mismo que: contador = contador + 25

// Pierde 10 por error de registro
contador -= 10;      // esto es lo mismo que: contador = contador - 10

// Se duplican las visitas
contador *= 2;       // esto es lo mismo que: contador = contador * 2

console.log("\n--- Ejercicio 3: El contador de visitas ---");
console.log("Valor final del contador:", contador);
// Resultado esperado: (100 + 25 - 10) * 2 = 230


// -----------------------------------------------------
// EJERCICIO 4 (EJERCICIO 5 en la guia): La operacion misteriosa
// Implementar y analizar: (20 + 10) / 5 + 3 * 2 - 4
// -----------------------------------------------------

// Paso 1: primero se resuelve el parentesis (20 + 10) = 30
// Paso 2: luego las multiplicaciones y divisiones de izquierda a derecha
//         30 / 5 = 6    y    3 * 2 = 6
// Paso 3: finalmente sumas y restas: 6 + 6 - 4 = 8

let resultado = (20 + 10) / 5 + 3 * 2 - 4;

console.log("\n--- Ejercicio 4: La operacion misteriosa ---");
console.log("Expresion: (20 + 10) / 5 + 3 * 2 - 4");
console.log("Resultado:", resultado);
// El resultado debe ser 8