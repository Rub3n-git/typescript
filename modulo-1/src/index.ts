import { calcularMedia, calcularMediana, filtrarAtipicos } from "./math-utils";

//Datos de Prueba
const temperaturas: number [] = [22.5, 19.8,25.1, 18.3, 41.0, 23.2, 17.9, 38.5, 21.4, 20.1];

console.log ( "Análisis de temperaturas: " );
console.log ("datos originales: ", temperaturas);

//Media
const media = calcularMedia(temperaturas);
if (media !== null) {
    console.log ( `Media: ${media.toFixed(2)}` );
}

//Mediana
const mediana = calcularMediana(temperaturas);
if (mediana !== null) {
    console.log ( `Mediana: ${mediana.toFixed(2)}ºC` );
}

//Filtrar Atipicos- Eliminamos los valores que se alejan mas de 8 grados respecto a la media
const filtrados = filtrarAtipicos(temperaturas, 8);
console.log ( "Sin atipicos:", filtrados);

//Caso Limite - Array vacio
const mediaVacia = calcularMedia([]);
console.log ( "Media de array vacio: ", mediaVacia); //null





