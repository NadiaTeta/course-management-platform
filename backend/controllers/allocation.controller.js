const Allocation = require('../models/allocation.model');
const Course = require('../models/course.model');
const User = require('../models/user.model');

exports.assignCourse = async (req, res) => {
  const { courseId, facilitatorId, classId, cohortId, modeId, semester } = req.body;
  try {
    const user = await User.findByPk(facilitatorId);
    if (!user || user.role !== 'facilitator') {
      return res.status(400).json({ message: 'The selected user is not a facilitator.' });
    }
    
    const allocation = await Allocation.create({ courseId, facilitatorId, classId, cohortId, modeId, semester });
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

exports.getAllocationById = async (req, res) => {
  const { id } = req.params;
  try {
    const allocation = await Allocation.findByPk(id, {
      include: [Course, { model: User, attributes: ['username', 'email'] }],
    });

    if (!allocation) {
      return res.status(404).json({ message: 'Allocation not found' });
    }

    res.json(allocation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getFacilitatorCourses = async (req, res) => {
  const { facilitatorId } = req.params;
  const allocations = await Allocation.findAll({
    where: { facilitatorId },
    include: [Course],
  });
  res.json(allocations);
};

exports.updateAllocation = async (req, res) => {
  const { id } = req.params;
  const { courseId, facilitatorId, classId, cohortId, modeId, semester } = req.body;

  try {
    const allocation = await Allocation.findByPk(id);

    if (!allocation) {
      return res.status(404).json({ message: 'Allocation not found' });
    }

    allocation.courseId = courseId ?? allocation.courseId;
    allocation.facilitatorId = facilitatorId ?? allocation.facilitatorId;
    allocation.classId = classId ?? allocation.classId;
    allocation.cohortId = cohortId ?? allocation.cohortId;
    allocation.modeId = modeId ?? allocation.modeId;
    allocation.semester = semester ?? allocation.semester;

    await allocation.save();
    res.json({ message: 'Allocation updated successfully', allocation });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.deleteAllocation = async (req, res) => {
  const { id } = req.params;
  try {
    const allocation = await Allocation.findByPk(id);
    if (!allocation) {
      return res.status(404).json({ message: 'Allocation not found' });
    }

    await allocation.destroy();
    res.json({ message: 'Allocation deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
