const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user.model');
const Allocation = require('./allocation.model')

const ActivityTracker = sequelize.define('ActivityTracker', {
  allocationId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  week: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  attendance: {
    type: DataTypes.JSON,
    allowNull: false
  },
  formativeOneGrading: {
    type: DataTypes.ENUM('Done', 'Pending', 'Not Started'),
    defaultValue: 'Not Started'
  },
  formativeTwoGrading: {
    type: DataTypes.ENUM('Done', 'Pending', 'Not Started'),
    defaultValue: 'Not Started'
  },
  summativeGrading: {
    type: DataTypes.ENUM('Done', 'Pending', 'Not Started'),
    defaultValue: 'Not Started'
  },
  courseModeration: {
    type: DataTypes.ENUM('Done', 'Pending', 'Not Started'),
    defaultValue: 'Not Started'
  },
  intranetSync: {
    type: DataTypes.ENUM('Done', 'Pending', 'Not Started'),
    defaultValue: 'Not Started'
  },
  gradeBookStatus: {
    type: DataTypes.ENUM('Done', 'Pending', 'Not Started'),
    defaultValue: 'Not Started'
  }
});

ActivityTracker.belongsTo(Allocation, { foreignKey: 'allocationId' });
Allocation.hasMany(ActivityTracker, { foreignKey: 'allocationId' });

module.exports = ActivityTracker;