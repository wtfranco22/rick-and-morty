const users = require('./../utils/users');
const login = (req, res) => {
    const { email, password } = req.query;
    if (users.some((user) => user.email === email && user.password === password)) {
        return res.status(200).json({ access: true });
    } else {
        return res.status(404).json({ access: false });
    }
}
module.exports = { login };