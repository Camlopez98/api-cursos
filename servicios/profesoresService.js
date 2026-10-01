import Profesor from "../models/profesores.js";

export const crearProfesor = async (datos) => {
  return await Profesor.create(datos);
};

export const obtenerProfesores = async () => {
  return await Profesor.find();
};

export const obtenerProfesorPorId = async (id) => {
  return await Profesor.findById(id);
};

export const actualizarProfesor = async (id, datos) => {
  return await Profesor.findByIdAndUpdate(id, datos, {
    new: true,
    runValidators: true,
  });
};

export const actualizarProfesorParcial = async (id, datos) => {
  return await Profesor.findByIdAndUpdate(id, { $set: datos }, {
    new: true,
    runValidators: true,
  });
};

export const eliminarProfesor = async (id) => {
  return await Profesor.findByIdAndDelete(id);
};
