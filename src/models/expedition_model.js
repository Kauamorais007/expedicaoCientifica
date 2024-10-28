import { Schema, model } from "mongoose";
import Explorers from "../models/explorers_model.js"; 
import Species from "../models/species_model.js"; 


const ExpeditionSchema = new Schema({
    location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
    participants: {
        type: Schema.Types.ObjectId,
        ref: "Explorers",
        required: true
    },
    speciesFound: {
        type: Schema.Types.ObjectId,
        ref: "Species",
        required: true
    }
});

const Expedition = model("Expedition", ExpeditionSchema);

export default Expedition;

