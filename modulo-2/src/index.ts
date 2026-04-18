import { obtenerRecurso } from "./services/api-client";
import type {
    Estudiante,
    Asignatura,
    EstadoMatricula
} from "./domain/types/index.js";

//Funcion que usa la Union Discriminada

function generarReporte (estado: EstadoMatricula): string {
    switch (estado.tipo) {
        case "activa":
            return `Matricula Activa: ${estado.asignaturas.length} asignaturas`;
        case "suspendida":
            return `Matricula Suspendida- Motivos: ${estado.motivos}`;
        case "finalizada":
            return `Matricula Finalizada- Nota Media: ${estado.notaMedia}`;
    }
}

//Funcion Principal Asincrona
async function main() {
    console.log("===Universidad de JAEN===\n");

//Obtener Estudiantes

const respuestaEstudiantes = await obtenerRecurso<Estudiante[]>("estudiantes");
if (respuestaEstudiantes.exito) {
    console.log(`Estudiantes (${respuestaEstudiantes.datos.length}):`);
    respuestaEstudiantes.datos.forEach(e=> {
        console.log(`- ${e.nombre} (${e.email})`);
    });
}

console.log("");

//Obtener Asignaturas
const respuestaAsignaturas = await obtenerRecurso<Asignatura[]>("asignaturas");
if (respuestaAsignaturas.exito) {
    console.log(`Asignaturas (${respuestaAsignaturas.datos.length}):`);
    respuestaAsignaturas.datos.forEach(a => {
        console.log(`- ${a.nombre} (${a.creditos} créditos)`);
    });
}

console.log("");

//Probar Union Discriminada
console.log("===Reporte de Matricula===\n");

const estados: EstadoMatricula[] = [
    {
        tipo: "activa",
        asignaturas: [
            {codigo: "TS-101", nombre: "Typescript Avanzado", creditos: 6},
            {codigo: "WEB-202", nombre: "Arquitectura web", creditos: 4}
        ]
    },
    {
        tipo: "suspendida",
        motivos: ["Impago de tasas academicas"]
    },
    {
        tipo: "finalizada",
        notaMedia: 8.7
    }
];

estados.forEach(estado => {
    console.log(`${generarReporte(estado)}`);
});

}

main();