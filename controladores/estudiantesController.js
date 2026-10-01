import {
  crearEstudiante as crearEstudianteServicio,
  obtenerEstudiantes as obtenerEstudiantesServicio,
  obtenerEstudiantePorId as obtenerEstudiantePorIdServicio,
  actualizarEstudiante as actualizarEstudianteServicio,
  actualizarEstudianteParcial as actualizarEstudianteParcialServicio,
  eliminarEstudiante as eliminarEstudianteServicio,
} from "../servicios/estudiantesService.js";

export const crearEstudiante = async (req, res) => {
  try {
    const estudiante = await crearEstudianteServicio(req.body);
    res.status(201).json(estudiante);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const listarEstudiantes = async (_req, res) => {
  try {
    const estudiantes = await obtenerEstudiantesServicio();
    res.json(estudiantes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerEstudiante = async (req, res) => {
  try {
    const estudiante = await obtenerEstudiantePorIdServicio(req.params.id);
    if (!estudiante) {
      return res.status(404).json({ mensaje: "Estudiante no encontrado" });
    }
    res.json(estudiante);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarEstudiante = async (req, res) => {
  try {
    const estudianteActualizado = await actualizarEstudianteServicio(req.params.id, req.body);
    if (!estudianteActualizado) {
      return res.status(404).json({ mensaje: "Estudiante no encontrado" });
    }
    res.json(estudianteActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const actualizarEstudianteParcial = async (req, res) => {
  try {
    const estudianteActualizado = await actualizarEstudianteParcialServicio(req.params.id, req.body);
    if (!estudianteActualizado) {
      return res.status(404).json({ mensaje: "Estudiante no encontrado" });
    }
    res.json(estudianteActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const eliminarEstudiante = async (req, res) => {
  try {
    const estudianteEliminado = await eliminarEstudianteServicio(req.params.id);
    if (!estudianteEliminado) {
      return res.status(404).json({ mensaje: "Estudiante no encontrado" });
    }
    res.status(200).json({ mensaje: "Estudiante eliminado con éxito" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
