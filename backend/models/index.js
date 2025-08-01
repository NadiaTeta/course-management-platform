const sequelize = require('../config/db');
const User = require('./user.model');
const Facilitator = require('./facilitator.model');
const Course = require('./course.model');
const ActivityTracker = require('./activityTracker.model');
const Cohort = require('./cohort.model');
const Class = require('./class.model');
const Mode = require('./mode.model');
const Allocation = require('./allocation.model');

// Associations
User.hasOne(Facilitator, { foreignKey: 'userId' });
Facilitator.belongsTo(User, { foreignKey: 'userId' });

//Course.belongsTo(Facilitator, { foreignKey: 'facilitatorId' });
Facilitator.hasMany(Course, { foreignKey: 'facilitatorId' });

ActivityTracker.belongsTo(Facilitator, { foreignKey: 'facilitatorId' });
Facilitator.hasMany(ActivityTracker, { foreignKey: 'facilitatorId' });

Course.belongsTo(Cohort, { foreignKey: 'cohortId' });
Course.belongsTo(Class, { foreignKey: 'classId' });
Course.belongsTo(Mode, { foreignKey: 'modeId' });

Allocation.hasMany(ActivityTracker, { foreignKey: 'allocationId' });
ActivityTracker.belongsTo(Allocation, { foreignKey: 'allocationId' });

Allocation.belongsTo(User, { foreignKey: 'facilitatorId', });
Allocation.belongsTo(Course, { foreignKey: 'courseId' });

// Export models
module.exports = {
  sequelize,
  User,
  Facilitator,
  Course,
  Allocation,
  ActivityTracker,
  Cohort,
  Class,
  Mode,
};
