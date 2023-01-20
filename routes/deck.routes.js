import express from 'express';
import { createDeck, getDecks } from '../controller/deck.controller.js';

const router = express.Router();

router.post('/api/deck', createDeck);
router.get('/api/deck', getDecks);
export default router;
