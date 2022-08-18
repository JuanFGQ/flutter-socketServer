const Band = require("./band");

//*33

class Bands{

constructor(){
this.bands = [];

}


//*funcion para añadir bandas //*33
addBand(band = new Band()){
    this.bands.push(band);

}
//*funcion para obtener bandas //33
getBands(){
    return this.bands;
}

// *eliminar bandas //33
deleteBand(id = ''){
    /*
    filtro todas las bandas que no cumplan con la condicion del id
    que estoy recibiendo como argumento
    */

    this.bands = this.bands.filter(band => band.id !== id);
    return this.bands;

}

//*añadir votos //33

voteBand(id = ''){

    this.bands = this.bands.map(band => {
        if(band.id === id){
            band.votes++;
            return band;
        }else{
            return band;
        }
    });



}

}


module.exports = Bands;
