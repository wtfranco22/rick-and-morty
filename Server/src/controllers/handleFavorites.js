let myFavs = [];

const postFavs = (req, res) => {
    let { character } = req.body;
    myFavs.push(character);
    return res.status(200).json(myFavs);
}

const deleteFavs = (req, res) => {
    const { id } = req.body;
    myFavs = myFavs.filter((character) => character.id === +id);
    return res.json(200).json(myFavs);
}

module.exports = {
    postFavs,
    deleteFavs
}