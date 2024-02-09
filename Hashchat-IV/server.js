const http = require('http')
const express = require('express')
const app = express()

const server = http.createServer(app)

const io = require('socket.io')(server)

io.addListener('connection', (socket)=>{
    console.log('Novo usuário conectado!')
    socket.addListener('new message',(msg)=>{
        io.emit('new message', msg)
    })
})

server.listen(8080, ()=>{
    console.log('Server aberto!')
},'999.999.999.999')

app.use(express.static('public'));
