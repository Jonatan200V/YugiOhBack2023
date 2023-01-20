import express from 'express';
import data from './data/data.js';
import logger from 'morgan';
import cors from 'cors';
import sequelize from './db/db.js';
import Deck from './model/deck.model.js';
import router from './routes/deck.routes.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(logger('dev'));
app.use(router);
app.get('/api/yugioh', (_, res) => {
  res.json(data);
});
app.get('/api/yugioh/:id', (req, res) => {
  const { id } = req.params;
  const response = data.filter((carta) => carta.id === id);
  if (response.length > 0) {
    return res.json(response);
  }
  res.status(404).send('PAGE NOT FOUND');
});
app.post('/api/yugioh', (req, res) => {
  const card = { id: data.length + 1, ...req.body };
  data = [...data, card];
  res.status(201).json(data);
});

const PORT = 3600;

async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(PORT);
    console.log(`Estamos corriendo en el servidor ${PORT}`);
  } catch (error) {
    console.log(error);
  }
}
main();
