import { Router } from "express";
import {
  crearProfesor,
  listarProfesores,
  obtenerProfesor,
  actualizarProfesor,
  actualizarProfesorParcial,
  eliminarProfesor,
} from "../controladores/profesoresController.js";

const router = Router();

router.post("/", crearProfesor);
router.get("/", listarProfesores);
router.get("/:id", obtenerProfesor);
router.put("/:id", actualizarProfesor);
router.patch("/:id", actualizarProfesorParcial);
router.delete("/:id", eliminarProfesor);

export default router;