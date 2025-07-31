const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Course = require('./course.model');
const User = require('./user.model');
const Facilitator = require('./facilitator.model');
const Cohort = require('./cohort.model');
const Class = require('./class.model');
const Mode = require('./mode.model');

const Allocation = sequelize.define('Allocation', {
  semester: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Allocation, { foreignKey: 'facilitatorId' });
Allocation.belongsTo(User, { foreignKey: 'facilitatorId' });

Course.hasMany(Allocation, { foreignKey: 'courseId' });
Allocation.belongsTo(Course, { foreignKey: 'courseId' });

Allocation.belongsTo(Cohort, { foreignKey: 'cohortId' });
Allocation.belongsTo(Class, { foreignKey: 'classId' });
Allocation.belongsTo(Mode, { foreignKey: 'modeId' });

module.exports = Allocation;
