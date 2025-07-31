// models/cohort.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // adjust path to your sequelize instance

const Cohort = sequelize.define('Cohort', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,  // e.g. '2024S', '2025J'
  },
}, {
  tableName: 'cohorts',
  timestamps: false,
});

module.exports = Cohort;
