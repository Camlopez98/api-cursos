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
