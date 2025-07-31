// models/mode.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Mode = sequelize.define('Mode', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // 'Online', 'In-person', 'Hybrid'
  },
}, {
  tableName: 'modes',
  timestamps: false,
});

module.exports = Mode;
