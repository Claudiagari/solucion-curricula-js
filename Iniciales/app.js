//Preguntando Nombre y apellido
var name = prompt("¿Cual es tu nombre y apellido?");
// Obteniendo primrer inicial
var firstInitial = name.slice(0,1);
//Buscando posicionde segundo caracte
var secondInitialPosition = name.indexOf(" ") +1;
//Obteniendo segunda Inicial
var secondInitial = name.slice(secondInitialPosition,secondInitialPosition+1);
console.log(firstInitial+secondInitial);
//Escribiendo en la web
document.write("Tus Iniciales son " + firstInitial.toUpperCase()+secondInitial.toUpperCase());
