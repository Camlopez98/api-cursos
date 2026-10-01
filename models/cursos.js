import mongoose from "mongoose";

// Definición del esquema con sus tipos y validaciones
const cursoSchema = new mongoose.Schema(
  {
    codigo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    creditos: {
      type: Number,
      required: true,
      min: 1,
    },
    profesor: {
      type: String,
      required: true,
      trim: true,
    },
    estado: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // Registra automáticamente createdAt y updatedAt
  }
);

// Creación del modelo a partir del schema
const Curso = mongoose.model("Curso", cursoSchema);

export default Curso;

