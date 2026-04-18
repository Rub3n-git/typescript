//Tipos base
export type UUID = string;

//Entidades del dominio
export interface Estudiante {
  readonly id: UUID;
    nombre: string;
    email: string;
    fechaMatricula: Date;
}
export interface Asignatura {
    readonly codigo: string;
    nombre: string;
    creditos: number;
}
//Union Discriminada: EstadoMatricula
export interface MatriculaActiva {
    tipo: "activa";
    asignaturas: Asignatura[];
}

export interface MatriculaSuspendida {
    tipo: "suspendida";
    motivos: string[];
}
export interface MatriculaFinalizada {
    tipo: "finalizada";
    notaMedia: number;
}

export type EstadoMatricula = 
|MatriculaActiva 
| MatriculaSuspendida 
| MatriculaFinalizada;

//Interfaz generica para respuestas
export interface RespuestaAPI<T> {
    codigoEstado: number;
    exito: boolean;
    datos: T;
    errores?: string[];
}

