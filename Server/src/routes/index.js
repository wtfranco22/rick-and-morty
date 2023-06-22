const { login } = require('./../controllers/login');
const { getCharById } = require('./../controllers/getCharById');
const { postFavs, deleteFavs, getFavs } = require('./../controllers/handleFavorites');

const router = require('express').Router();

router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/fav', postFavs);
router.post('/get-favs',getFavs);
router.delete('/fav/:id', deleteFavs);

module.exports = { router };