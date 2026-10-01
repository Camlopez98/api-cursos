import mongoose from "mongoose";

const estudianteSchema = new mongoose.Schema(
  {
    matricula: { type: String, required: true, unique: true, trim: true },
    nombre: { type: String, required: true, trim: true },
    correo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    carrera: { type: String, required: true, trim: true },
    estado: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Estudiante = mongoose.model("Estudiante", estudianteSchema);

export default Estudiante;