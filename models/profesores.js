import mongoose from "mongoose";

const profesorSchema = new mongoose.Schema(
  {
    codigo: { type: String, required: true, unique: true, trim: true },
    nombre: { type: String, required: true, trim: true },
    correo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    especialidad: { type: String, required: true, trim: true },
    estado: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Profesor = mongoose.model("Profesor", profesorSchema);

export default Profesor;