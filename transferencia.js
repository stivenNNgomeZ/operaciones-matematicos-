// =====================================================
// EJERCICIOS DE TRANSFERENCIA - Operadores en JavaScript
// Tecnico en Programacion de Software - SENA
// =====================================================


// -----------------------------------------------------
// EJERCICIO 1: Calculadora de gastos de viaje
// Dividir los gastos del viaje entre los amigos
// -----------------------------------------------------

// Costos fijos (son constantes porque no cambian)
const TRANSPORTE = 120000;
const ALOJAMIENTO = 200000;
const ALIMENTACION = 150000;
const CANTIDAD_PERSONAS = 4;
const APORTE_POR_PERSONA = 130000;

// Variables para calcular (pueden cambiar segun los datos)
let totalGastos = TRANSPORTE + ALOJAMIENTO + ALIMENTACION;
let costoPorPersona = totalGastos / CANTIDAD_PERSONAS;
let totalRecolectado = APORTE_POR_PERSONA * CANTIDAD_PERSONAS;
let sobrante = totalRecolectado - totalGastos;

console.log("--- Ejercicio 1: Calculadora de gastos de viaje ---");
console.log("Total gastos del viaje: $" + totalGastos);
console.log("Costo por persona: $" + costoPorPersona);
console.log("Total recolectado: $" + totalRecolectado);
console.log("Sobrante: $" + sobrante);


// -----------------------------------------------------
// EJERCICIO 2: Conversor de tiempo
// Convertir 7200 segundos a minutos, horas y dias
// -----------------------------------------------------

const SEGUNDOS_TOTALES = 7200;  // constante: los segundos no cambian

// Variables para guardar cada conversion
let minutos = SEGUNDOS_TOTALES / 60;
let horas = SEGUNDOS_TOTALES / 3600;
let dias = SEGUNDOS_TOTALES / 86400;

console.log("\n--- Ejercicio 2: Conversor de tiempo ---");
console.log("Segundos:", SEGUNDOS_TOTALES);
console.log("En minutos:", minutos);
console.log("En horas:", horas);
console.log("En dias:", dias.toFixed(4));


// -----------------------------------------------------
// EJERCICIO 3: Produccion de una fabrica
// Calcular cuantas cajas llena y cuantas piezas sobran
// -----------------------------------------------------

const PIEZAS_POR_HORA = 250;    // la maquina siempre produce lo mismo
const HORAS_TRABAJADAS = 8;      // las horas del dia
const CAPACIDAD_CAJA = 12;       // cada caja tiene 12 piezas

// Variables de calculo
let totalPiezas = PIEZAS_POR_HORA * HORAS_TRABAJADAS;
let cajasLlenas = Math.floor(totalPiezas / CAPACIDAD_CAJA);  // solo las cajas completas
let piezasSobrantes = totalPiezas % CAPACIDAD_CAJA;           // el residuo = lo que sobra

console.log("\n--- Ejercicio 3: Produccion de una fabrica ---");
console.log("Total de piezas fabricadas:", totalPiezas);
console.log("Cajas llenas:", cajasLlenas);
console.log("Piezas sueltas:", piezasSobrantes);


// -----------------------------------------------------
// EJERCICIO 4: Estadisticas de calificaciones
// Calcular suma, promedio y una expresion especial
// -----------------------------------------------------

// Notas como constantes
const NOTA1 = 4.5;
const NOTA2 = 3.8;
const NOTA3 = 2.9;
const NOTA4 = 4.0;

// Variables para los resultados
let sumaNotas = NOTA1 + NOTA2 + NOTA3 + NOTA4;
let promedioNotas = sumaNotas / 4;
let expresionEspecial = (NOTA1 + NOTA2) * (NOTA3 + NOTA4) / 2;

console.log("\n--- Ejercicio 4: Estadisticas de calificaciones ---");
console.log("Suma de notas:", sumaNotas);
console.log("Promedio:", promedioNotas.toFixed(2));
console.log("Resultado expresion especial:", expresionEspecial.toFixed(2));