const URL = "https://rickandmortyapi.com/api/character";
const axios = require('axios');

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios(`${URL}/${id}`);
        if (!data.id) throw new Error("Character not found");
        let { name, gender, species, origin, image, status } = data;
        let character = { id, name, gender, species, origin: origin.name, image, status };
        return res.status(200).json(character);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
module.exports = { getCharById };