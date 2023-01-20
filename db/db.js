import Sequelize from 'sequelize';
const sequelize = new Sequelize(
  'postgresql://postgres:JYpTFomYw6z53pYm0xLA@containers-us-west-86.railway.app:5991/railway',
  {
    loggin: false,
  }
);
export default sequelize;
