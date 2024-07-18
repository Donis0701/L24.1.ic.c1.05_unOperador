export default class operador {
    constructor(ced,nom, tipo, horasT, precioB){
        this.ced = ced
        this.nom = nom
        this.tipo = tipo
        this.horasT = horasT
        this.precioB = precioB
    }
    set ced(ced){
        this._ced = ced
    }
    get ced(){
        return this._ced
    }
    set nom(nom){
        this._nom = nom}
    get nom(){
        return this._nom
    }
    
    set tipo(tipo){
        this._tipo = +tipo
    }
    get tipo(){
        return this._tipo
    }
    set horasT(horasT){
        this._horasT = +horasT
    }
    get horasT(){
        return this._horasT
    }
    set precioB(precioB){
        this._precioB = +precioB
    }
    get precioB(){
        return this._precioB
    }
    horasExtra(){
        if(this.horasT > 40){
            return this.horasT - 40
        }else{
            return 0
        }
    }

    tipoOperador(){
        switch(this.tipo){
            case 1:
                return "Supervisor"
            case 2:
                return "Diseñador"
            case 3:
                return "Costurera"
            case 4:
                return "Bordador"
            case 5:
                return "Empacador"
            default:
                return "Error";
        }
    }
    precioHoraExtra(){
        switch(this.tipo){
            case 1:
                return this.precioB * 0.32
            case 2:
                return this.precioB * 0.23
            case 3:
                return this.precioB * 0.17
            case 4:
                return this.precioB * 0.07
            case 5:
                return this.precioB * 0.05
            default:
                return "Error";
        }
    }
    BonoHorasExtra(){
        return this.horasExtra() * this.precioHoraExtra()
    }
    total(){
        return this.precioB + this.BonoHorasExtra()
    }

       
}