const users = require('./../src/utils/users.json');
const app = require('./../src/app');
const session = require('supertest');
const agent = session(app);
let rick, morty, testFavs = [], token = 'Bearer svqk4zfua7a';
beforeAll(() => {
    rick = {
        "id": "1",
        "name": "Rick Sanchez",
        "gender": "Male",
        "species": "Human",
        "origin": "Earth (C-137)",
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "status": "Alive"
    }
    morty = {
        "id": "2",
        "name": "Morty Smith",
        "gender": "Male",
        "species": "Human",
        "origin": "unknown",
        "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        "status": "Alive"
    }
});

describe('Test de RUTAS', () => {
    it('Responde con status 200', async () => {
        await agent.get('/rickandmorty/character/1').expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "spacies", "gender", "status", "origin" e "image"', async () => {
        const response = await agent.get('/rickandmorty/character/1');
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('name');
        expect(response.body).toHaveProperty('species');
        expect(response.body).toHaveProperty('gender');
        expect(response.body).toHaveProperty('status');
        expect(response.body).toHaveProperty('origin');
        expect(response.body).toHaveProperty('image');
    });
    it('Si hay un error responde con status: 500', async () => {
        let res = await agent.get('/rickandmorty/character/0');
        expect(res.statusCode).toBe(500);
        res = await agent.get('/rickandmorty/character/a');
        expect(res.statusCode).toBe(500);
        res = await agent.get('/rickandmorty/character/1234');
        expect(res.statusCode).toBe(500);
        res = await agent.get('/rickandmorty/character/-1234');
        expect(res.statusCode).toBe(500);
    });
});

describe('GET /rickandmorty/login', () => {
    it('Acceso con exito responde con access y token', async () => {
        const response = await agent.get('/rickandmorty/login?email=wtfranco22@gmail.com&password=wtfranco22');
        expect(response.body).toHaveProperty('access');
        expect(response.body).toHaveProperty('token');
        expect(response.statusCode).toBe(200);
        expect(response.body.access).toBe(true);
    });
    it('Acceso sin exito, debe responder con error', async () => {
        const response = await agent.get('/rickandmorty/login?email=wtfranco22@gmail.com&password=wtfr');
        expect(response.body.access).toBe(false);
        expect(response.statusCode).toBe(404);
    });
});

describe('POST /rickandmort/fav', () => {
    it('en caso de exito retorna arreglo', async () => {
        const res = await agent.post('/rickandmorty/fav')
            .set('Authorization', token)
            .send({ character: rick });
        testFavs.push(rick);
        expect(res.body).toEqual(testFavs);
        expect(typeof (res.body)).toBe(typeof (testFavs));
    });
    it('debe agregar un segundo personaje a favs', async () => {
        const res = await agent.post('/rickandmorty/fav')
            .set('Authorization', token)
            .send({ character: morty });
        testFavs.push(morty)
        expect(res.body).toEqual(testFavs);
        expect(res.body.length).toBe(2);
        expect(typeof (res.body)).toBe(typeof (testFavs));
    });
    it('debe tener permiso, debe coincidir el token', async () => {
        const res = await agent.post('/rickandmorty/fav')
            .set('Authorization', 'Bearer svqk4zfua71')
            .send({ character: morty });
        expect(res.statusCode).toBe(404);
    })
});
describe('DELETE /rickandmorty/fav/1', () => {
    it('no debe afectar la coleccion de personajes favs', async () => {
        const res = await agent.delete('/rickandmorty/fav/0').set('Authorization', token);
        expect(res.body).toEqual(testFavs);
        expect(res.statusCode).toBe(200);
    })
    it('debe eliminar el personaje', async () => {
        const res = await agent.delete('/rickandmorty/fav/1')
            .set('Authorization', token);
        testFavs.shift();
        expect(res.body).toEqual(testFavs);
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(1);
    });
    it('debe disminuir la cantidad de favs', async () => {
        const res = await agent.delete('/rickandmorty/fav/2').set('Authorization', token);
        testFavs.shift();
        expect(res.body).toEqual(testFavs);
        expect(res.body.length).toBe(0);
    })
});