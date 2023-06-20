const { login } = require('./../controllers/login');
const { getCharById } = require('./../controllers/getCharById');
const { postFavs, deleteFavs } = require('./../controllers/handleFavorites');

const router = require('express').Router();

router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/fav', postFavs);
router.delete('/fav/:id', deleteFavs);

module.exports = { router };