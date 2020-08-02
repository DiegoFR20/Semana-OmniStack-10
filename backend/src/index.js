const express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    http = require('http'),

    routes = require('./routes'),
    { setupWebSocket } = require('./websocket')

const app = express()
const server = http.Server(app)

setupWebSocket(server)

mongoose.connect('mongodb+srv://DiegoFR:Freire15.@cluster0-wlpz2.mongodb.net/omnistack10', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)