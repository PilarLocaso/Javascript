var parcial,final,promedio;
parcial = parseFloat(prompt("Parcial"));
final = parseFloat(prompt("Final"));
promedio = (parcial+final)/2;

if(promedio >= 10.5){
 document.write("El promedio es "+promedio+" APROBADO");

}else{
 document.write("El promedio es "+promedio+" DESAPROBADO");
}

