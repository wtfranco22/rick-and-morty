const users = require('./../utils/users.json');
const fs = require('fs').promises;

const postFavs = async (req, res) => {
    try {
        let indexUser = req.indexUser;
        if (indexUser === -1) throw new Error('Token');
        let { character } = req.body;
        users[indexUser].favs.push(character);
        users[indexUser].favs.sort((a, b) => a.id - b.id);
        await fs.writeFile(__dirname + '/../utils/users.json', JSON.stringify(users, null, 2));
        return res.status(200).json(users[indexUser].favs);
    }
    catch (error) {
        if (error.message === 'Token') return res.status(404).json({ error: 'User is not authorized' });
        return res.status(500).json({ error: 'Failed to save the fav' });
    }
}

const deleteFavs = async (req, res) => {
    try {
        let indexUser = req.indexUser;
        if (indexUser === -1) throw new Error('Token');
        const { id } = req.params;
        users[indexUser].favs = users[indexUser].favs.filter((character) => Number(character.id) !== Number(id));
        await fs.writeFile(__dirname + '/../utils/users.json', JSON.stringify(users, null, 2));
        return res.status(200).json(users[indexUser].favs);
    } catch (error) {
        if (error.message === 'Token') return res.status(404).json({ error: 'User is not authorized' });
        return res.status(500).json({ error: 'Error deleting the fav' });
    }
}

const getFavs = (req, res) => {
    try {
        let indexUser = req.indexUser;
        if (indexUser === -1) throw new Error('Error reloading favs');
        return res.status(200).json({ favs: users[indexUser].favs });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
module.exports = {
    postFavs,
    deleteFavs,
    getFavs
}