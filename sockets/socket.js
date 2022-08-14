


const{ io }= require('../index');



io.on('connection', client => {
    console.log('cliente conectado');

client.on('disconnect', () => {
    console.log('cliente desconectado');

});


//este es el listen del emit creado en index.html
//*21
    client.on('mensaje',(payload) =>{
        console.log('mensaje!!!',payload);
    } );


    //como el io es todo el servidor , si yo envio un mensaje desde 
    //esta funcion estaria enviandolo a todos los clientes conectados
    io.emit('mensaje', { admin:'Nuevo mensaje' });
    

});
