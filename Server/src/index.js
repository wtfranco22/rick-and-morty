const users = require('./utils/users.json');
const express = require('express');
const server = express();
const { router } = require('./routes/index');
const morgan = require('morgan');
PORT = 3001;
server.use(express.json());
server.use(morgan('dev'));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});
server.use((req, res, next) => {
    const token = req.headers.authorization;
    const indexUser = token ? users.findIndex((user) => user.token === token) : {};
    req.indexUser = indexUser;
    next();
});
server.use('/rickandmorty', router);
server.listen(PORT, () => {
    console.log('arriba')
})