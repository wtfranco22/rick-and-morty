const http = require("http");
const characters = require("./utils/data")
PORT = 3001;
HOST = 'localhost';
http.createServer((req, res) => {
    let { url } = req;
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (url.includes('/rickandmorty/character')) {
        let id = url.split('/').pop();
        let character = characters.find((character) => character.id === Number(id));
        return character ?
            res.writeHead(200, { "Content-Type": "application/json" }) && res.end(JSON.stringify(character))
            : res.writeHead(404, { "Content-Type": "application/json" }) && res.end(JSON.stringify({"error":"Character not found"}))
    }
}).listen(PORT, HOST)