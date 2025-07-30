const Allocation = require('../models/allocation.model');
const Course = require('../models/course.model');
const User = require('../models/user.model');

exports.assignCourse = async (req, res) => {
  const { courseId, facilitatorId, semester } = req.body;
  try {
    const allocation = await Allocation.create({ courseId, facilitatorId, semester });
    res.status(201).json(allocation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllAllocations = async (req, res) => {
  const allocations = await Allocation.findAll({
    include: [Course, { model: User, attributes: ['username', 'email'] }],
  });
  res.json(allocations);
};

exports.getFacilitatorCourses = async (req, res) => {
  const { facilitatorId } = req.params;
  const allocations = await Allocation.findAll({
    where: { facilitatorId },
    include: [Course],
  });
  res.json(allocations);
};
