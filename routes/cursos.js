import { Router } from "express";
import {
  crearCurso,
  listarCursos,
  obtenerCurso,
  actualizarCurso,
  actualizarCursoParcial,
  eliminarCurso,
} from "../controladores/cursosController.js";

const router = Router();

router.post("/", crearCurso);
router.get("/", listarCursos);
router.get("/:id", obtenerCurso);
router.put("/:id", actualizarCurso);
router.patch("/:id", actualizarCursoParcial);
router.delete("/:id", eliminarCurso);

export default router;