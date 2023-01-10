const express = require('express');
const app = express();
const data = require('../data/data');
const fs = require('fs');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const sequelize = require('../db/db');
const Deck = require('../model/deck.model');
const router = require('../routes/deck.routes');
app.use(express.json());
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
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
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    app.listen(PORT);
    console.log(`Estamoscorriendo en el servidor ${PORT}`);
  } catch (error) {}
}
main();
