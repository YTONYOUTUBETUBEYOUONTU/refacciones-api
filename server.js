const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

//Middleware to parse JSON request bodies
const PORT = process.env.PORT || 3001

server.use(middlewares)
server.use(router)
server.listen(PORT)

console.log(`JSON Server is running on port ${PORT}`)

// Sample endpoints:
// http://localhost:3001/usuarios
// http://localhost:3001/refacciones
