function CalcularPromedio(){
    let Nota1 = parseInt(prompt("Ingresar la nota del primer parcial"));
    let Nota2 = parseInt(prompt("Ingresar la nota del segundo parcial"));
    let Nota3 = parseInt(prompt("Ingresar la nota del final"));

    let NotaFinal = (Nota1 + Nota2 + Nota3) /3; 
    let mensaje = `Tu promedio es de ${NotaFinal}`;
    alert(mensaje);

    if(NotaFinal < 7){
        let mensaje = `Lamentablemente, desaprobaste el cuatrimestre (tu nota es ${NotaFinal})`;
        alert(mensaje);
    }else{
        let mensaje = `Felicitaciones! Aprobaste el cuatrimestre (tu nota es ${NotaFinal})`;
        alert(mensaje);
    }  
}

CalcularPromedio();