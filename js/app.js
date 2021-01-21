function presionarBoton(boton){
    let valor = boton.innerHTML;
    let piso = document.getElementById("piso").innerHTML;
    let dpto = document.getElementById("dpto").innerHTML;

    if(piso.length < 2){
        document.getElementById("piso").innerHTML = piso.toString() + valor.toString();
    }else{
        if(dpto.length < 1){
                document.getElementById("dpto").innerHTML = dpto.toString() + valor.toString();
            }
        }
    }

let resetear = document.getElementById("clear");

resetear.onclick = function(e){
    let pantallaBot = document.getElementById('pantallaBot');
    dpto.innerHTML = "";
    piso.innerHTML = "";
    pantallaBot.innerHTML = "Marque su piso";
} 

call.onclick = function(){
    let pantallaBot = document.getElementById('pantallaBot');
    let tipoDatoDpto = parseInt(dpto.innerText);
    let tipoDatoPiso = parseInt(piso.innerHTML);

    if(tipoDatoDpto >= 0 && tipoDatoDpto < 7 && tipoDatoPiso >= 0 && tipoDatoPiso < 49){
        pantallaBot.innerHTML = `Marcando al piso ${tipoDatoPiso} departamento ${tipoDatoDpto}`;
    }else{
        pantallaBot.innerHTML = "Departamento no registrado";
    }
}