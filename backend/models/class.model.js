// models/class.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Class = sequelize.define('Class', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // e.g. '2024S', '2025J'
  },
}, {
  tableName: 'classes',
  timestamps: false,
});

module.exports = Class; 
