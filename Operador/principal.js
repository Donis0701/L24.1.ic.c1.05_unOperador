/**De un operador se tienen los siguientes datos: cédula de identidad;tipo de operador (1= supervisor,
 * 2= Diseñador,3= Costurera,4= Bordador, 5= Empacador), horas trabajadas en la semana y el precio
 * de la hora base.Si trabaja más de 40 horas de la semana, el operador tendrá el beneficio de bono 
 * por horas extras. La hora extra se paga de acuerdo a lo siguiente: Supervisor = 32%, Diseñador = 23%
 * Costurera = 17%, Bordador = 7%, Empacador = 5.Muestre: Cédula,precio de la hora extra,cantidad de horas
 * extras trabajadas, bono de horas extras y total a cobrar*/
import Ioperador from "./Cl_Ioperador.js";
import operador from "./CL_operador.js";

let iOp = new Ioperador(),
    ced = iOp.leerced(),
    nom = iOp.leernom(),
    tipo = iOp.leertipo(),
    horasT = iOp.leerhoras(),
    precioB = iOp.leerprecio(),
oP = new operador(ced,nom, tipo, horasT, precioB),
salida = document.getElementById("salida");
salida.innerHTML = iOp.reporteOperador(oP.ced,oP.nom,oP.tipoOperador(),oP.horasT, oP.horasExtra(), oP.BonoHorasExtra(), oP.total(), oP.precioHoraExtra());
   