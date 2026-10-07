import mongoose from "mongoose";

// Responde 400 cuando el :id de la ruta no es un ObjectId válido,
// en lugar de dejar que Mongoose lance un CastError (500).
export const validarId = (_req, res, next, id) => {
  if (!mongoose.isObjectIdOrHexString(id)) {
    return res.status(400).json({ error: "El id no tiene un formato válido" });
  }
  next();
};
