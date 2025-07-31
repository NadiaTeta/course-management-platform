const Course = require('../models/course.model');
const Facilitator = require('../models/facilitator.model');
//const Cohort = require('../models/cohort.model');
//const Class = require('../models/class.model');
//const Mode = require('../models/mode.model');

exports.createCourse = async (req, res) => {
  try {
    const data = req.body;
    const course = await Course.create(data);
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getCourses = async (req, res) => {
  try {
    const filters = req.query;
    const courses = await Course.findAll({ where: filters });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getFacilitatorCourses = async (req, res) => {
  try {
    const facilitatorId = req.params.facilitatorId;
    const courses = await Course.findAll({ where: { facilitatorId } });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const id = req.params.id;
    const [updated] = await Course.update(req.body, { where: { id } });
    if (updated) {
      const updatedCourse = await Course.findByPk(id);
      res.json(updatedCourse);
    } else {
      res.status(404).json({ message: 'Course offering not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Course.destroy({ where: { id } });
    if (deleted) {
      res.json({ message: 'Deleted successfully' });
    } else {
      res.status(404).json({ message: 'Course offering not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
