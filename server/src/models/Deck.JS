const { DataTypes } = require("sequelize");
const sequelize = require('../db/config');

const Deck = sequelize.define('Deck', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  xp: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

module.exports = Deck;