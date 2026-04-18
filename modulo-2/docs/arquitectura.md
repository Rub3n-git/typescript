# Documentación de Arquitectura — Módulo 2

## Por qué interface para Estudiante y Asignatura

Las entidades del dominio usan `interface` porque representan
objetos con forma definida. El modificador `readonly` en los IDs
garantiza que nunca se modifican tras la creación.

## Por qué type para EstadoMatricula

`EstadoMatricula` es una Unión Discriminada — no es un objeto
sino la unión de tres tipos distintos. `type` es la construcción
correcta para expresar uniones.

## Por qué Uniones Discriminadas en lugar de propiedades opcionales

Con propiedades opcionales TypeScript no puede garantizar qué
propiedades existen en cada estado. Con la Unión Discriminada,
cada estado tiene sus propias propiedades obligatorias y TypeScript
las garantiza al 100% en cada rama del switch.

## Cómo los genéricos abstraen las respuestas de red

`RespuestaAPI<T>` permite tener una sola interfaz para todas
las respuestas. TypeScript sustituye T por el tipo concreto
en cada uso, manteniendo la seguridad de tipos sin duplicar código.