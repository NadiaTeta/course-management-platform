const sequelize = require('../config/db');
const User = require('./user.model');
const Facilitator = require('./facilitator.model');
const Course = require('./course.model');
const ActivityLog = require('./activity.model');
const Cohort = require('./cohort.model');
const Class = require('./class.model');
const Mode = require('./mode.model');

// Associations
User.hasOne(Facilitator, { foreignKey: 'userId' });
Facilitator.belongsTo(User, { foreignKey: 'userId' });

Course.belongsTo(Facilitator, { foreignKey: 'facilitatorId' });
Facilitator.hasMany(Course, { foreignKey: 'facilitatorId' });

ActivityLog.belongsTo(Facilitator, { foreignKey: 'facilitatorId' });
Facilitator.hasMany(ActivityLog, { foreignKey: 'facilitatorId' });

Course.belongsTo(Cohort, { foreignKey: 'cohortId' });
Course.belongsTo(Class, { foreignKey: 'classId' });
Course.belongsTo(Mode, { foreignKey: 'modeId' });

// Export models
module.exports = {
  sequelize,
  User,
  Facilitator,
  Course,
  ActivityLog,
  Cohort,
  Class,
  Mode,
};
