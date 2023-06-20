const users = require('./../utils/users');
const login = (req, res) => {
    const { email, password } = req.query;
    if (!email || !password) {
        return res.status(404).json({
            message: 'Email or Password is missing'
        });
    }
    if (users.some((user) => user.email === email && user.password === password)) {
        return res.status(200).json({ success: true });
    } else {
        return res.status(404).json({ success: false });
    }
}
module.exports = { login };