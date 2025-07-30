const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./user.model');

const Activity = sequelize.define('Activity', {
  action: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  metadata: {
    type: DataTypes.JSON,
    allowNull: true,
  },
});

User.hasMany(Activity, { foreignKey: 'facilitatorId' });
Activity.belongsTo(User, { foreignKey: 'facilitatorId' });

module.exports = Activity;
