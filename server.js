import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cursosRoutes from "./routes/cursos.js";
import estudiantesRoutes from "./routes/estudiantes.js";
import profesoresRoutes from "./routes/profesores.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    nombre: "API de Cursos",
    version: "1.0.0",
    recursos: ["/api/cursos", "/api/estudiantes", "/api/profesores"],
  });
});

if (!MONGODB_URI) {
  console.warn("MONGODB_URI no está definida. El servidor arrancará, pero la base de datos no podrá conectarse.");
} else {
  mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("Conectado exitosamente a MongoDB"))
    .catch((error) => console.error("Error al conectar a MongoDB:", error));
}

app.use("/api/cursos", cursosRoutes);
app.use("/api/estudiantes", estudiantesRoutes);
app.use("/api/profesores", profesoresRoutes);

app.use((error, _req, res, _next) => {
  res.status(500).json({ error: error.message || "Error interno del servidor" });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});