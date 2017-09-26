//Ingresos
var income = prompt("¿Cuanto es el Ingreso");//400
//Costo
var costs = prompt(" ¿Cuanto es el Costo");//65
// Porcentaje de Impuesto
var taxPercent = prompt ("¿Cuanto es el porcentaje(%) de Impuestos");//18%
//Ganancia Bruta
var grossProfit = income - costs;
// Obteniendo cantidad de Impuestos
var tax = grossProfit * taxPercent/100
// Ganacia neta
var netIncome = grossProfit - tax;
// Mostrando Ganancia neta
document.write("Tu Ganancia neta es $"+ netIncome);
