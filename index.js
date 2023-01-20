import express from 'express';
import data from './data/data.js';
import fs from 'fs';
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
app.use((_, res) => {
  fs.readFile(`index.html`, 'utf-8', (err, content) => {
    if (err) {
      console.log(err);
      return res.send('xD');
    } else {
      return res
        .status(404)
        .contentType('image/jpg')
        .contentType('html')
        .send(content);
    }
  });
  //   res.status(404).send(redireccion);
});

const PORT = 3600;

async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(PORT);
    console.log(`Estamoscorriendo en el servidor ${PORT}`);
  } catch (error) {}
}
main();
