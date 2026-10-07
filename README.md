# API de Gestión Académica

[![Pruebas de la API](https://github.com/Camlopez98/api-cursos/actions/workflows/pruebas.yml/badge.svg)](https://github.com/Camlopez98/api-cursos/actions/workflows/pruebas.yml)

API REST para administrar los registros de **cursos**, **estudiantes** y **profesores** de una institución educativa. Está construida con Node.js, Express y MongoDB (Mongoose) y organizada en una arquitectura por capas que separa el enrutamiento, la lógica HTTP, la lógica de negocio y el acceso a datos.

## Tecnologías

| Categoría | Herramienta |
|---|---|
| Entorno de ejecución | Node.js 18+ (módulos ES) |
| Framework web | Express 4 |
| Base de datos | MongoDB |
| ODM | Mongoose 8 |
| Configuración | dotenv (variables de entorno) |
| Pruebas | Postman / Newman (colección incluida en `docs/`) |

## Arquitectura

Cada petición recorre las capas en una sola dirección, de modo que cada una tiene una única responsabilidad:

```
Cliente HTTP
    │
    ▼
routes/         Define los endpoints y los asocia a un controlador
    │
    ▼
controladores/  Lee la petición, invoca el servicio y traduce el resultado a códigos HTTP
    │
    ▼
servicios/      Lógica de negocio y operaciones sobre la base de datos
    │
    ▼
models/         Esquemas de Mongoose con tipos y validaciones
    │
    ▼
MongoDB
```

Esta separación permite cambiar la lógica de negocio sin tocar las rutas, o sustituir la capa de datos sin modificar los controladores.

## Estructura del proyecto

```
api-cursos/
├── controladores/      Lógica HTTP de cada recurso
├── middlewares/        Validaciones comunes de las rutas (formato del id)
├── models/             Esquemas de MongoDB (Curso, Estudiante, Profesor)
├── routes/             Definición de endpoints por recurso
├── servicios/          Lógica de negocio y acceso a datos
├── docs/               Colección de Postman para probar la API
├── .github/workflows/  Pruebas automáticas en GitHub Actions
├── server.js           Punto de entrada: configuración de Express y conexión a MongoDB
├── .env.example        Plantilla de variables de entorno
└── package.json
```

## Requisitos

- Node.js 18 o superior
- MongoDB en ejecución local, o una URI de MongoDB Atlas

## Instalación y ejecución

1. Clonar el repositorio e instalar las dependencias:

   ```bash
   git clone https://github.com/Camlopez98/api-cursos.git
   cd api-cursos
   npm install
   ```

2. Crear el archivo `.env` a partir de la plantilla:

   ```bash
   cp .env.example .env
   ```

   | Variable | Descripción | Valor por defecto |
   |---|---|---|
   | `PORT` | Puerto del servidor | `3000` |
   | `MONGODB_URI` | Cadena de conexión a MongoDB | `mongodb://localhost:27017/colegio` |

   El archivo `.env` está excluido del control de versiones mediante `.gitignore`, de modo que las credenciales nunca se publican.

3. Iniciar el servidor:

   ```bash
   npm start      # modo normal
   npm run dev    # recarga automática al guardar cambios
   ```

   El servidor queda disponible en `http://localhost:3000`. La ruta raíz (`GET /`) devuelve el nombre, la versión y los recursos disponibles.

## Endpoints

Los tres recursos exponen las mismas operaciones CRUD:

| Método | Ruta | Descripción | Respuesta exitosa |
|---|---|---|---|
| `GET` | `/api/{recurso}` | Lista todos los registros | `200` |
| `GET` | `/api/{recurso}/:id` | Obtiene un registro por su id | `200` |
| `POST` | `/api/{recurso}` | Crea un registro | `201` |
| `PUT` | `/api/{recurso}/:id` | Reemplaza un registro completo | `200` |
| `PATCH` | `/api/{recurso}/:id` | Actualiza solo los campos enviados | `200` |
| `DELETE` | `/api/{recurso}/:id` | Elimina un registro | `200` |

Donde `{recurso}` es `cursos`, `estudiantes` o `profesores`.

### Códigos de error

| Código | Situación |
|---|---|
| `400` | Datos inválidos: campos obligatorios ausentes, tipos incorrectos, valores duplicados o un id con formato inválido |
| `404` | No existe un registro con el id indicado |
| `500` | Error interno del servidor o de la base de datos |

## Modelos de datos

Todos los modelos registran automáticamente `createdAt` y `updatedAt`.

### Curso

| Campo | Tipo | Reglas |
|---|---|---|
| `codigo` | String | Obligatorio, único |
| `nombre` | String | Obligatorio |
| `creditos` | Number | Obligatorio, mínimo 1 |
| `profesor` | String | Obligatorio |
| `estado` | Boolean | Por defecto `true` |

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

| Campo | Tipo | Reglas |
|---|---|---|
| `matricula` | String | Obligatorio, único |
| `nombre` | String | Obligatorio |
| `correo` | String | Obligatorio, único, se guarda en minúsculas |
| `carrera` | String | Obligatorio |
| `estado` | Boolean | Por defecto `true` |

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

| Campo | Tipo | Reglas |
|---|---|---|
| `codigo` | String | Obligatorio, único |
| `nombre` | String | Obligatorio |
| `correo` | String | Obligatorio, único, se guarda en minúsculas |
| `especialidad` | String | Obligatorio |
| `estado` | Boolean | Por defecto `true` |

```json
{
  "codigo": "P-001",
  "nombre": "Carlos Ramírez",
  "correo": "carlos@correo.com",
  "especialidad": "Base de Datos",
  "estado": true
}
```

## Pruebas

### Con Postman

1. En Postman, seleccionar **Import** y elegir el archivo `docs/api-cursos.postman_collection.json`.
2. Con el servidor en ejecución, abrir la colección y usar **Run collection**.

La colección incluye todas las operaciones de los tres recursos, además de casos de error (registro inexistente, id con formato inválido, campos obligatorios ausentes y valores duplicados). Al crear un registro, su `_id` se guarda automáticamente en una variable de la colección, de modo que las peticiones siguientes (obtener, actualizar y eliminar) funcionan sin copiar ids a mano. Cada petición verifica el código de estado esperado. Cada carpeta elimina al final el registro que creó, por lo que la colección se puede ejecutar varias veces seguidas.

### Desde la terminal (Newman)

Con el servidor en ejecución, la misma colección se ejecuta desde la terminal sin tener Postman instalado (`npx` descarga Newman automáticamente):

```bash
npm run test:api
```

### Integración continua

En cada push a `main` y en cada pull request, GitHub Actions levanta una base MongoDB, arranca la API y ejecuta la colección con Newman (ver `.github/workflows/pruebas.yml`). El resultado aparece en la insignia al inicio de este README.

### Con Thunder Client (VS Code)

1. Abrir Thunder Client en la barra lateral y ir a la pestaña **Collections**.
2. En el menú de la pestaña, elegir **Import** y seleccionar `docs/api-cursos.postman_collection.json`.
3. Ejecutar las peticiones en orden, o la colección completa con **Run All**.

Los scripts que guardan el `_id` creado (`cursoId`, `estudianteId`, `profesorId`) están escritos para Postman/Newman. Si la versión de Thunder Client no los ejecuta, copiar el `_id` de la respuesta del POST en la variable correspondiente de la colección antes de lanzar las peticiones que usan `/:id`.

### Con cURL

```bash
# Crear un curso
curl -X POST http://localhost:3000/api/cursos \
  -H "Content-Type: application/json" \
  -d '{"codigo":"CS101","nombre":"Programación","creditos":4,"profesor":"Juan Pérez"}'

# Listar cursos
curl http://localhost:3000/api/cursos

# Actualizar parcialmente un curso
curl -X PATCH http://localhost:3000/api/cursos/<id> \
  -H "Content-Type: application/json" \
  -d '{"creditos":3}'
```

## Mejoras planificadas

- Paginación y filtros en los listados.
- Autenticación con JWT para proteger las operaciones de escritura.
- Pruebas automatizadas con Jest y Supertest.
- Contenerización con Docker y Docker Compose.

## Autor

**Camilo Andrés López Hernández** · Estudiante de Ingeniería de Software, Universidad de La Salle
[GitHub](https://github.com/Camlopez98)
