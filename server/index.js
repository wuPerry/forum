// server.js
const jsonServer = require('json-server')
const path = require('path')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(jsonServer.bodyParser);
server.use(middlewares)

server.post('/login', function (req, res, next) {
    res.header('Access-Control-Expose-Headers', 'access-token');
    const {userName, password} = req.body;
    if (userName === "perry" && password === "123456") {
        res.header('access-token', Date.now());
        res.json(true);
    } else {
        res.json(false);
    }
});

server.use(router)
server.use(require('./auth'));

server.listen(3001, () => {
    console.log('JSON Server is running')
})