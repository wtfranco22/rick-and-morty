const URL = "https://rickandmortyapi.com/api/character";
const axios = require('axios');
const getCharById = (req, res) => {
    const { id } = req.params;
    axios.get(`${URL}/${id}`)
        .then((response) => response.data)
        .then((data) => {
            let { id, name, gender, species, origin, image, status } = data;
            if (name) {
                const character = { id, name, gender, species, origin: origin.name, image, status }
                return res.status(200).json(character);
            } else {
                return res.status(404).json({ error: "Not found" })
            }
        })
        .catch(error => res.status(500).send(error.message))
}
module.exports = { getCharById };