

// generador de IDS //*33
const { v4: uuidV4} = require('uuid');


// *33
class Band{

    constructor(name = 'no-name'){
        this.id = uuidV4();//identificador 5
        this.name = name;
        this.votes = 0;


    }

}
//*33
//*es necesaria esta linea para que se pueda exportar la clase banda
module.exports = Band;