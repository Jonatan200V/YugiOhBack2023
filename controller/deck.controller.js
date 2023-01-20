import Deck from '../model/deck.model.js';

export const createDeck = async (req, res) => {
  const { images, name } = req.body;
  try {
    await Deck.create({
      deckContain: images,
      deckName: name,
    });
    res.json({ msg: 'Deck Creado exitosamente' });
  } catch (error) {
    res.status(401).json({ msg: error.message });
  }
};
export const getDecks = async (req, res) => {
  try {
    const decks = await Deck.findAll();
    res.json(decks);
  } catch (error) {
    console.log(error);
  }
};
