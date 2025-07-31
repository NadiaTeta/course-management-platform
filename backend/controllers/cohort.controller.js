// controllers/cohort.controller.js
const Cohort = require('../models/cohort.model');

exports.createCohort = async (req, res) => {
  try {
    const cohort = await Cohort.create(req.body);
    res.status(201).json(cohort);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllCohorts = async (req, res) => {
  try {
    const cohorts = await Cohort.findAll();
    res.json(cohorts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCohortById = async (req, res) => {
  try {
    const cohort = await Cohort.findByPk(req.params.id);
    if (!cohort) {
      return res.status(404).json({ error: 'Cohort not found' });
    }
    res.json(cohort);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCohort = async (req, res) => {
  try {
    const cohort = await Cohort.findByPk(req.params.id);
    if (!cohort) {
      return res.status(404).json({ error: 'Cohort not found' });
    }
    await cohort.update(req.body);
    res.json(cohort);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCohort = async (req, res) => {
  try {
    const cohort = await Cohort.findByPk(req.params.id);
    if (!cohort) {
      return res.status(404).json({ error: 'Cohort not found' });
    }
    await cohort.destroy();
    res.json({ message: 'Cohort deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
