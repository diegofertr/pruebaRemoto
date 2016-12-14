const http = require('http');
const fs = require('fs');
const express = require('express');
const socketIO = require('socket.io');
const r = require('rethinkdb');
const config = require('./config.json');
 
// Loading Express, HTTP, Socket.IO and RethinkDB
const db = Object.assign(config.rethinkdb, { db: 'timeline' });
const app = express();
const server = http.Server(app);
const io = socketIO(server);
 
// Index route which renders the index.html
app.get('/', (req, res) => {
  fs.readFile(`${__dirname}/index.html`, (err, html) => {
    res.end(html || err);
  });
});
 
// The changefeed is provided by change() function
// which emits broadcast of new messages for all clients
r.connect(db)
  .then(conn => r.table('messages').changes().run(conn))
  .then(cursor => {
    cursor.each((err, data) => {
    const message = data.new_val;
    io.sockets.emit('/messages', message);
    });
  })
;
 
// Listing all messages when new user connects into socket.io
io.on('connection', (client) => {
  r.connect(db)
    .then(conn => r.table('messages').orderBy(r.asc('date')).run(conn))
    .then(cursor => {
    cursor.each((err, message) => {
        io.sockets.emit('/messages', message);
    });
    })
  ;
  // Listening the event from client and insert new messages
  client.on('/messages', (body) => {
    const { name, message } = body;
    const data = { name, message, date: new Date() };
    r.connect(db).then(conn => r.table('messages').insert(data).run(conn));
  });
});

server.listen(3000, () => console.log('Timeline Server!'));

// insertar datos en la base de datos
// r.db('timeline').table('messages').insert({message: "YYYYYY", name: "XXXX"});
// ver los datos de la tabla messages
// r.db('timeline').table('messages')
// añadi este comentario a manera de que no haya conflictos con el codigo, aun no soy un experto en git.

