"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_utils_1 = require("./math-utils");
//Datos de Prueba
const temperaturas = [22.5, 19.8, 25.1, 18.3, 41.0, 23.2, 17.9, 38.5, 21.4, 20.1];
console.log("Análisis de temperaturas: ");
console.log("datos originales: ", temperaturas);
//Media
const media = (0, math_utils_1.calcularMedia)(temperaturas);
if (media !== null) {
    console.log(`Media: ${media.toFixed(2)}`);
}
//Mediana
const mediana = (0, math_utils_1.calcularMediana)(temperaturas);
if (mediana !== null) {
    console.log(`Mediana: ${mediana.toFixed(2)}ºC`);
}
//Filtrar Atipicos- Eliminamos los valores que se alejan mas de 8 grados respecto a la media
const filtrados = (0, math_utils_1.filtrarAtipicos)(temperaturas, 8);
console.log("Sin atipicos:", filtrados);
//Caso Limite - Array vacio
const mediaVacia = (0, math_utils_1.calcularMedia)([]);
console.log("Media de array vacio: ", mediaVacia); //null
