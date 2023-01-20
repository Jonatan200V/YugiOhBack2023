import Sequelize from 'sequelize';
import * as pg from 'pg';
const sequelize = new Sequelize(
  'postgres://postgres:43486277@localhost:5432/ygo',
  {
    loggin: false,
    dialectModule: pg,
  }
);
export default sequelize;
