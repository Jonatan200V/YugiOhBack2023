const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Deck = sequelize.define(
  'deck',
  {
    idDeck: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    deckContain: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
    deckName: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = Deck;
