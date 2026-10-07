import { Router } from "express";
import {
  crearProfesor,
  listarProfesores,
  obtenerProfesor,
  actualizarProfesor,
  actualizarProfesorParcial,
  eliminarProfesor,
} from "../controladores/profesoresController.js";
import { validarId } from "../middlewares/validarId.js";

const router = Router();

router.param("id", validarId);

router.post("/", crearProfesor);
router.get("/", listarProfesores);
router.get("/:id", obtenerProfesor);
router.put("/:id", actualizarProfesor);
router.patch("/:id", actualizarProfesorParcial);
router.delete("/:id", eliminarProfesor);

export default router;