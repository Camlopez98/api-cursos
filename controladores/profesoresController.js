import {
  crearProfesor as crearProfesorServicio,
  obtenerProfesores as obtenerProfesoresServicio,
  obtenerProfesorPorId as obtenerProfesorPorIdServicio,
  actualizarProfesor as actualizarProfesorServicio,
  actualizarProfesorParcial as actualizarProfesorParcialServicio,
  eliminarProfesor as eliminarProfesorServicio,
} from "../servicios/profesoresService.js";

export const crearProfesor = async (req, res) => {
  try {
    const profesor = await crearProfesorServicio(req.body);
    res.status(201).json(profesor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const listarProfesores = async (_req, res) => {
  try {
    const profesores = await obtenerProfesoresServicio();
    res.json(profesores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerProfesor = async (req, res) => {
  try {
    const profesor = await obtenerProfesorPorIdServicio(req.params.id);
    if (!profesor) {
      return res.status(404).json({ mensaje: "Profesor no encontrado" });
    }
    res.json(profesor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarProfesor = async (req, res) => {
  try {
    const profesorActualizado = await actualizarProfesorServicio(req.params.id, req.body);
    if (!profesorActualizado) {
      return res.status(404).json({ mensaje: "Profesor no encontrado" });
    }
    res.json(profesorActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const actualizarProfesorParcial = async (req, res) => {
  try {
    const profesorActualizado = await actualizarProfesorParcialServicio(req.params.id, req.body);
    if (!profesorActualizado) {
      return res.status(404).json({ mensaje: "Profesor no encontrado" });
    }
    res.json(profesorActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const eliminarProfesor = async (req, res) => {
  try {
    const profesorEliminado = await eliminarProfesorServicio(req.params.id);
    if (!profesorEliminado) {
      return res.status(404).json({ mensaje: "Profesor no encontrado" });
    }
    res.status(200).json({ mensaje: "Profesor eliminado con éxito" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
