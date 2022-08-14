const express = require('express');
const path = require('path');
require('dotenv').config();

// const { Socket } = require('socket.io');

//App de express
const app = express();



//Node Server
const server = require('http').createServer(app);


//22
//module.exports  funcion para exportar 
module.exports.io = require('socket.io')(server);

//22
//llamando el archivo socket.js
require('./sockets/socket');





//*18
//cuando el nombre esta en gris es porque no se esta usando 
    const publicPath = path.resolve(__dirname,'public')
    app.use(express.static(publicPath));




server.listen(process.env.PORT, (err) => {

if(err) throw new Error(err);


console.log('Servidor Corriendo en puerto!!! ', process.env.PORT);

});