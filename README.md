# API de Cursos, Estudiantes y Profesores

API REST desarrollada con Node.js, Express y MongoDB/Mongoose para gestionar registros de cursos, estudiantes y profesores.

## Estructura del proyecto

- `models/`: esquemas de MongoDB
- `routes/`: endpoints de la API
- `controladores/`: lógica HTTP de cada recurso
- `servicios/`: lógica de negocio y acceso a datos
- `server.js`: arranque del servidor y conexión a MongoDB

## Requisitos

- Node.js 18 o superior
- MongoDB en ejecución local o una URI válida en `.env`

## Instalación

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Asegúrate de tener el archivo `.env` con una URI de MongoDB:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/colegio
   ```

## Ejecutar

```bash
npm start
```

## Endpoints

### Cursos
- `GET /api/cursos`
- `GET /api/cursos/:id`
- `POST /api/cursos`
- `PUT /api/cursos/:id`
- `DELETE /api/cursos/:id`

### Estudiantes
- `GET /api/estudiantes`
- `GET /api/estudiantes/:id`
- `POST /api/estudiantes`
- `PUT /api/estudiantes/:id`
- `DELETE /api/estudiantes/:id`

### Profesores
- `GET /api/profesores`
- `GET /api/profesores/:id`
- `POST /api/profesores`
- `PUT /api/profesores/:id`
- `DELETE /api/profesores/:id`

## Ejemplos de payload

### Curso
```json
{
  "codigo": "CS101",
  "nombre": "Programación",
  "creditos": 4,
  "profesor": "Juan Pérez",
  "estado": true
}
```

### Estudiante
```json
{
  "matricula": "20241001",
  "nombre": "Ana López",
  "correo": "ana@correo.com",
  "carrera": "Ingeniería de Sistemas",
  "estado": true
}
```

### Profesor
```json
{
  "codigo": "P-001",
  "nombre": "Carlos Ramírez",
  "correo": "carlos@correo.com",
  "especialidad": "Base de Datos",
  "estado": true
}
```

## Probar la API

La colección `docs/api-cursos.postman_collection.json` recorre el CRUD completo de cursos, estudiantes y profesores. Cada carpeta crea un registro, lo consulta, lo actualiza y al final lo elimina, por lo que se puede ejecutar varias veces seguidas. Por defecto apunta a `http://localhost:3000` (variable `baseUrl`).

Primero arranca el servidor con `npm start` y luego elige una de estas opciones.

### Desde la terminal (Newman)

No hace falta tener Postman instalado: `npx` descarga Newman automáticamente.

```bash
npm run test:api
```

### Desde VS Code (Thunder Client)

1. Abre Thunder Client en la barra lateral y ve a la pestaña **Collections**.
2. En el menú de la pestaña, elige **Import** y selecciona `docs/api-cursos.postman_collection.json`.
3. Ejecuta las peticiones en orden (o la colección completa con **Run All**).

Los scripts de prueba que guardan el `_id` creado (`cursoId`, `estudianteId`, `profesorId`) están escritos para Postman/Newman. Si tu versión de Thunder Client no los ejecuta, copia el `_id` de la respuesta del POST en la variable correspondiente de la colección antes de lanzar las peticiones que usan `/:id`.
