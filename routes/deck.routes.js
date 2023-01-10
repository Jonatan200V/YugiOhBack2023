const express = require('express');
const { createDeck, getDecks } = require('../controller/deck.controller');

const router = express.Router();

router.post('/api/deck', createDeck);
router.get('/api/deck', getDecks);
module.exports = router;
