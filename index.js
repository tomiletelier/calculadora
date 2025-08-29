let variable= ""

function mostrarNumero (numero){

variable+=numero;
document.getElementById ("texto").textContent=variable

}



function suma (numero) {

primerNumero=variable;
variable+=numero;
document.getElementById("texto2").textContent=variable;
variable=""

}


function igual (){

    document.getElementById("texto"). textContent
    =Number (variable) + Number(primerNumero)

}






