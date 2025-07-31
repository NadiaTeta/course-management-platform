const Class = require('../models/class.model');

// Create a class
exports.createClass = async (req, res) => {
  try {
    const { name } = req.body;
    const newClass = await Class.create({ name });
    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all classes
exports.getAllClasses = async (req, res) => {
  try {
    const classes = await Class.findAll();
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get class by ID
exports.getClassById = async (req, res) => {
  try {
    const cls = await Class.findByPk(req.params.id);
    if (!cls) return res.status(404).json({ error: 'Class not found' });
    res.status(200).json(cls);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update class
exports.updateClass = async (req, res) => {
  try {
    const cls = await Class.findByPk(req.params.id);
    if (!cls) return res.status(404).json({ error: 'Class not found' });

    await cls.update(req.body);
    res.status(200).json(cls);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete class
exports.deleteClass = async (req, res) => {
  try {
    const cls = await Class.findByPk(req.params.id);
    if (!cls) return res.status(404).json({ error: 'Class not found' });

    await cls.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
