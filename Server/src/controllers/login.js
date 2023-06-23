const users = require('../utils/users.json');
const fs = require('fs').promises;
const login = async (req, res) => {
    try {
        const { email, password } = req.query;
        const userIndex = users.findIndex((user) => user.email === email && user.password === password);
        if (userIndex === -1) throw new Error('access error');
        const token = Math.random().toString(36).substring(2);
        users[userIndex].token = `Bearer ${token}`;
        let favs = users[userIndex].favs;
        await fs.writeFile(__dirname + '/../utils/users.json', JSON.stringify(users, null, 2));
        return res.status(200).json({ access: true, token: token, favs: favs });
    } catch (error) {
        if (error.message === 'access error') return res.status(404).json({ access: false });
        return res.status(500).json({ error: 'Failed to save the token' });
    }
}
module.exports = { login };