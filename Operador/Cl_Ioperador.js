export default class Ioperador{
    leerced(){
        return prompt("ingrese la cedula");
    }
    leernom(){
        return prompt("ingrese su nombre y apellido");
    }
    leertipo(){
        return prompt("ingrese el tipo de operador: 1= supervisor, 2= Diseñador, 3= Costurera, 4= Bordador, 5= Empacador");
    }
    leerhoras(){
        return prompt("ingrese las horas trabajadas");
    }
    leerprecio(){
        return prompt("ingrese el precio base del día de trabajo");
    }

    reporteOperador(ced,nom,tipoO,horasT,horasE, bonohorasE,total,precioH,){
        return`
        <h4>---Registro de pago del personal---</h4>
        <br> Cedula: ${ced}
        <br> Nombre del operador: ${nom}
        <br> Tipo de operador: ${tipoO}
        <br> Horas trabajadas: ${horasT}
        <br> Horas extras: ${horasE}
        <br> Precio hora extra: ${precioH}$
        <br> Bono horas extras: ${bonohorasE}$
        <br> Total: ${total}$
        
        `

    }
}