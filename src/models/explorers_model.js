import { Schema, model } from "mongoose";

const ExplorersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  fieldOfStudy: {
    type: String,
    required: true,
  },
    ExplorersParticipated: {
        type: Number,
        required: true,
    }
  
});

const Explorers = model("Explorers", ExplorersSchema);

export default Explorers;

