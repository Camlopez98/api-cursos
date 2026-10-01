import {
  crearCurso as crearCursoServicio,
  obtenerCursos as obtenerCursosServicio,
  obtenerCursoPorId as obtenerCursoPorIdServicio,
  actualizarCurso as actualizarCursoServicio,
  actualizarCursoParcial as actualizarCursoParcialServicio,
  eliminarCurso as eliminarCursoServicio,
} from "../servicios/cursosService.js";

export const crearCurso = async (req, res) => {
  try {
    const curso = await crearCursoServicio(req.body);
    res.status(201).json(curso);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const listarCursos = async (_req, res) => {
  try {
    const cursos = await obtenerCursosServicio();
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerCurso = async (req, res) => {
  try {
    const curso = await obtenerCursoPorIdServicio(req.params.id);
    if (!curso) {
      return res.status(404).json({ mensaje: "Curso no encontrado" });
    }
    res.json(curso);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarCurso = async (req, res) => {
  try {
    const cursoActualizado = await actualizarCursoServicio(req.params.id, req.body);
    if (!cursoActualizado) {
      return res.status(404).json({ mensaje: "Curso no encontrado" });
    }
    res.json(cursoActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const actualizarCursoParcial = async (req, res) => {
  try {
    const cursoActualizado = await actualizarCursoParcialServicio(req.params.id, req.body);
    if (!cursoActualizado) {
      return res.status(404).json({ mensaje: "Curso no encontrado" });
    }
    res.json(cursoActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const eliminarCurso = async (req, res) => {
  try {
    const cursoEliminado = await eliminarCursoServicio(req.params.id);
    if (!cursoEliminado) {
      return res.status(404).json({ mensaje: "Curso no encontrado" });
    }
    res.status(200).json({ mensaje: "Curso eliminado con éxito" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
