import Expedition from "../models/expedition_model.js";

const store = async (req, res) => {
  try {
    const { name, date, participants, speciesFound } = req.body;


    const explorers = await Researcher.find({ _id: { $in: explorersParticipated } });
    if (explorers.length !== explorersParticipated.length) {
      return res.status(400).send("Some explorers are invalid.");
    }

    const species = await Species.find({ _id: { $in: speciesFound } });
    if (species.length !== speciesFound.length) {
      return res.status(400).send("Some species are invalid.");
    }

    const newExpedition = await Expedition.create({
      name,
      date,
      participants,
      speciesFound,
    });

    res.status(201).json(newExpedition);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {
  store,
};