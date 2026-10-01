import { Router } from "express";
import {
  crearEstudiante,
  listarEstudiantes,
  obtenerEstudiante,
  actualizarEstudiante,
  actualizarEstudianteParcial,
  eliminarEstudiante,
} from "../controladores/estudiantesController.js";

const router = Router();

router.post("/", crearEstudiante);
router.get("/", listarEstudiantes);
router.get("/:id", obtenerEstudiante);
router.put("/:id", actualizarEstudiante);
router.patch("/:id", actualizarEstudianteParcial);
router.delete("/:id", eliminarEstudiante);

export default router;