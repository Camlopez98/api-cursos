import Curso from "../models/cursos.js";

export const crearCurso = async (datos) => {
  return await Curso.create(datos);
};

export const obtenerCursos = async () => {
  return await Curso.find();
};

export const obtenerCursoPorId = async (id) => {
  return await Curso.findById(id);
};

export const actualizarCurso = async (id, datos) => {
  return await Curso.findByIdAndUpdate(id, datos, {
    new: true,
    runValidators: true,
  });
};

export const actualizarCursoParcial = async (id, datos) => {
  return await Curso.findByIdAndUpdate(id, { $set: datos }, {
    new: true,
    runValidators: true,
  });
};

export const eliminarCurso = async (id) => {
  return await Curso.findByIdAndDelete(id);
};
