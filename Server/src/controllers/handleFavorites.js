const users = require('./../utils/users.json');
const fs = require('fs');

const postFavs = (req, res) => {
    let indexUser = req.indexUser;
    let { character } = req.body;
    users[indexUser].favs.push(character);
    fs.writeFile(__dirname + '/../utils/users.json', JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ error: 'Error al guardar el fav, ' + err.message });
        }
        return res.status(200).json(users[indexUser].favs);
    });
}

const deleteFavs = (req, res) => {
    let indexUser = req.indexUser;
    const { id } = req.params;
    users[indexUser].favs = users[indexUser].favs.filter((character) => character.id !== +id);
    fs.writeFile(__dirname + '/../utils/users.json', JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ error: 'Error al eliminar el fav, ' + err.message });
        }
        return res.status(200).json(users[indexUser].favs);
    });
}

const getFavs = (req, res) => {
    let indexUser = req.indexUser;
    if (users[indexUser].favs) return res.status(200).json({ favs: users[indexUser].favs });
    return res.status(500).json({ error: 'Error al recargar los favs, ' + err.message });
}
module.exports = {
    postFavs,
    deleteFavs,
    getFavs
}