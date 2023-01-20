import { DataTypes } from 'sequelize';
import sequelize from '../db/db.js';

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
export default Deck;
