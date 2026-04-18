import type { RespuestaAPI } from "../domain/types/index.js";

//Simula una base de datos en memoria
const baseDatos: Record<string, unknown[]> = {
    estudiantes: [
        {
            id:"USR-001",
            nombre: "Ruben Urea",
            email: "ruben.urea@example.com",
            fechaMatricula: new Date("2026-09-01")
        },
        {
            id:"USR-002",
            nombre: "Maria Lopez",
            email: "maria.lopez@example.com",
            fechaMatricula: new Date("2026-09-01")
        }
    ],
    asignaturas: [
        {codigo: "TS-101", nombre: "Typescript Avanzado", creditos: 6},
        {codigo: "WEB-202", nombre: "Arquitectura web", creditos: 4}
    ]
};

//Metodo generico- devuelve una promesa fuertemente tipada
export function obtenerRecurso<T>(
    endpoint: string
): Promise<RespuestaAPI<T>> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const datos = baseDatos[endpoint];
            
            if (!datos) {
                reject({
                    codigoEstado: 404,
                    exito: false,
                    datos: null,
                    errores: [`Endpoint '${endpoint}' no encontrado`]
                });
                return;
            }

            resolve({
                codigoEstado: 200,
                exito: true,
                datos: datos as T
            });
        }, 300); //Simula latencia de red
    });
}