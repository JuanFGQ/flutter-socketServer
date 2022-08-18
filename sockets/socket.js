


const { Socket } = require('socket.io');
const{ io }= require('../index');
const Band = require('../models/band');
const Bands = require('../models/bands');



//*34
const bands = new Bands();

bands.addBand(new Band('queen'));
bands.addBand(new Band('metallica'));
bands.addBand(new Band('soad'));
bands.addBand(new Band('bulet'));
bands.addBand(new Band('slipknot'));

//*34
console.log(bands);




io.on('connection', client => {
    console.log('cliente conectado');

    client.emit('active-bands',bands.getBands());

client.on('disconnect', () => {
    console.log('cliente desconectado');

});


//este es el listen del emit creado en index.html
//*21
    client.on('mensaje',(payload) =>{
        console.log('mensaje!!!',payload);
        //como el io es todo el servidor , si yo envio un mensaje desde 
    //esta funcion estaria enviandolo a todos los clientes conectados
    // io.emit('mensaje', { admin:'Nuevo mensaje' });
        io.emit('mensaje', {admin:'nuevomensaje'});
    } );

//30
//el 'emitir' es el que llamo en el navegador 
client.on('emitir',( payload ) => {
    // ***************************************************************

    //*31 console log me emite al CMD
    // console.log(payload);

    //*31 este emit me transmite a la web con el accionamiento dek boton
    // io.emit('emitir',{nombre: 'juan',mensaje: 'transmision a web'}); //*31

    // *31
    client.broadcast.emit('emitir', payload);



    // ***************************************************************
    //'nuevo mensaje' es el que llamo desde el front-end de la app
    // io.emit('nuevo-mensaje', payload); //emite a todos los clientes conectados
    // client.broadcast.emit('nuevo-mensaje', payload);//emite a todos menos a el que lo emitio
})

    // ***************************************************************
            //*36
        client.on('vote-band',(payload)=>{
            console.log(payload);
            bands.voteBand(payload.id);
        io.emit('active-bands',bands.getBands());

        })

    // ***************************************************************


    // ***************************************************************
        //*37
// escuchando lo que me envian desde el front-end 
        client.on('add-band',(payload)=>{

            // llamando la nueva instancia de la banda para agregar en el
            // bands.addBand()
            const newBand = new Band(payload.name);
            bands.addBand(newBand);
        io.emit('active-bands',bands.getBands());

        })
    // ***************************************************************

        client.on('delete-bands',(payload) =>{
            bands.deleteBand(payload.id);
        io.emit('active-bands',bands.getBands());
        

        })





    // ***************************************************************

});
