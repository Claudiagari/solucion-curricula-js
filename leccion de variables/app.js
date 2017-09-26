var age =parseInt(prompt("¿Cual es tu edad?"));
//edad 18
//Convirtiendo mi edad a segundos
var ageInSeconds = age*365*24*60*60;
console.log(ageInSeconds);
//mostrando edad en la web
document.write("Tu edad es " + age + " Y en segundos es " + ageInSeconds );
