const server = require('./src/index');

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log('listen on port ' + PORT);
});