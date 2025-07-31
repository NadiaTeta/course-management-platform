const Mode = require('../models/mode.model');

// Create a mode
exports.createMode = async (req, res) => {
  try {
    const { name } = req.body;
    const newMode = await Mode.create({ name });
    res.status(201).json(newMode);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all modes
exports.getAllModes = async (req, res) => {
  try {
    const modes = await Mode.findAll();
    res.status(200).json(modes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get mode by ID
exports.getModeById = async (req, res) => {
  try {
    const mode = await Mode.findByPk(req.params.id);
    if (!mode) return res.status(404).json({ error: 'Mode not found' });
    res.status(200).json(mode);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update mode
exports.updateMode = async (req, res) => {
  try {
    const mode = await Mode.findByPk(req.params.id);
    if (!mode) return res.status(404).json({ error: 'Mode not found' });

    await mode.update(req.body);
    res.status(200).json(mode);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete mode
exports.deleteMode = async (req, res) => {
  try {
    const mode = await Mode.findByPk(req.params.id);
    if (!mode) return res.status(404).json({ error: 'Mode not found' });

    await mode.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
