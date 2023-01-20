import Sequelize from 'sequelize';
const sequelize = new Sequelize(
  'postgres://postgres:43486277@localhost:5432/ygo',
  {
    loggin: false,
  }
);
export default sequelize;
