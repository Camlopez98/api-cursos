import Estudiante from "../models/estudiantes.js";

export const crearEstudiante = async (datos) => {
  return await Estudiante.create(datos);
};

export const obtenerEstudiantes = async () => {
  return await Estudiante.find();
};

export const obtenerEstudiantePorId = async (id) => {
  return await Estudiante.findById(id);
};

export const actualizarEstudiante = async (id, datos) => {
  return await Estudiante.findByIdAndUpdate(id, datos, {
    new: true,
    runValidators: true,
  });
};

export const actualizarEstudianteParcial = async (id, datos) => {
  return await Estudiante.findByIdAndUpdate(id, { $set: datos }, {
    new: true,
    runValidators: true,
  });
};

export const eliminarEstudiante = async (id) => {
  return await Estudiante.findByIdAndDelete(id);
};
