import Explorer from "../models/explorers_model.js";

const store = async (req, res) => {
  try {
    const { name, fieldOfStudy, explorersParticipated } = req.body;

    await Expedition.create({ name, fieldOfStudy, explorersParticipated });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const index = async (req, res) => {
  try {
    const content = await Expedition.find().exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const show = async (req, res) => {
  try {
    const content = await Expedition.findById(req.params.id)
      .populate("explorers")
      .exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const update = async (req, res) => {
  try {
    const { name, fieldOfStudy, explorersParticipated } = req.body;

    await Expedition.findByIdAndUpdate(req.params.id, { name, fieldOfStudy, explorersParticipated 

    }).exec();

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const destroy = async (req, res) => {
  try {
    await Expedition.findByIdAndDelete(req.params.id).exec();

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {
  store,
  index,
  show,
  update,
  destroy,
};
