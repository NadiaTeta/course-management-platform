const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Course = require('./course.model');
const User = require('./user.model');

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

module.exports = Allocation;
