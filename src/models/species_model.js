import { Schema, model } from "mongoose";

const SpeciesSchema = new Schema ({

    name: {
        type: String,
        require: true,
    },
    discoveryLocation: {
        type: String,
        require: true,
    },
    rarity: {
        type: Number,
        required: true,
        min: 1,   
        max: 10
    },
    documented: {
        type: Boolean,
        default: false,
}

});

const Species = model("Species", SpeciesSchema);

export default Species;
