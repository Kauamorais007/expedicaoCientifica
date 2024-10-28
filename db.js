
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

(async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/expedition");
    console.log("Conectado com sucesso!");
  } catch (error) {
    console.log(error);
  }
})();

