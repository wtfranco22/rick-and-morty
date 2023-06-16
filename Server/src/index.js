const http = require("http");
const getCharById = require("./controllers/getCharById");
PORT = 3001;
HOST = 'localhost';
http.createServer((req, res) => {
    let { url } = req;
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (url.includes('/rickandmorty/character')) {
        let id = url.split('/').pop();
        getCharById(res, id)
    }
}).listen(PORT, HOST)