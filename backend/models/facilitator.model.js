const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./user.model');

const Facilitator = sequelize.define('Facilitator', {
  specialty: {
    type: DataTypes.STRING,
  },
});

Facilitator.belongsTo(User, { foreignKey: 'userId' });
User.hasOne(Facilitator, { foreignKey: 'userId' });

module.exports = Facilitator;
