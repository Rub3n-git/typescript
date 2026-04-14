//Calcular Media
//recibe un array de numeros y devuelve la media aritmetica o null si el array esta vacio
export function calcularMedia(datos: number[]): number | null {
    if (datos.length === 0) return null;
    const suma = datos.reduce ((acc, val) => acc +val,0);
    return suma / datos.length;
} 

//Calcular Mediana
//Devuelve el valor central del array ordenado
//si tiene numero par de elementos, promedia los dos centrales
export function calcularMediana(datos: number[]): number | null {
    if (datos.length === 0) return null;

    const ordenados = [...datos].sort((a, b) => a - b);
    const mitad = Math.floor(ordenados.length / 2);

    if (ordenados.length % 2 === 0) {
        return (ordenados[mitad]);
    } else {
        return (ordenados[mitad -1] + ordenados[mitad]) / 2;
    }
}


//filtrar Atipicos
//Elimina los valores que se alejan mas de "limite" respecto a la media.
//Devuelve el array filtrado -si la media es null, devuelve el array vacio
export function filtrarAtipicos (datos : number [], limite : number): number[] {
    const media = calcularMedia(datos);
    if (media === null) return [];
    return datos.filter (val => Math.abs(val - media) <= limite);
}