const users = require('../utils/users.json');
const fs = require('fs');
const login = (req, res) => {
    const { email, password } = req.query;
    const userIndex = users.findIndex((user) => user.email === email && user.password === password);
    if (userIndex !== -1) {
        const token = Math.random().toString(36).substring(2);
        users[userIndex].token = `Bearer ${token}`;
        let favs = users[userIndex].favs;
        fs.writeFile(__dirname + '/../utils/users.json', JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Error al guardar el token, ' + err.message });
            }
            return res.status(200).json({ access: true, token: token, favs: favs });
        });
    } else {
        return res.status(404).json({ access: false });
    }
}
module.exports = { login };