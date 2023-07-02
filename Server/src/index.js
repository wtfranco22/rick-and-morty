const server = require('./app');

PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
    console.log('arriba')
})