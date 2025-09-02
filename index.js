let variable= "";
let primerNumero= "";
let opCode= "";

;

function mostrarNumero (numero){

variable+=numero;
document.getElementById ("texto").textContent=variable

}


function option(modo) {

primerNumero=variable;
variable="";
opCode=modo;
document.getElementById("texto2").textContent=primerNumero + modo;

}

function raiz(){

document.getElementById ("texto").textContent = Math.sqrt (variable)
}

function igual(){

    let resultado;
    if (opCode=="+"){
        resultado= Number(primerNumero) + Number(variable);
    }

    if(opCode=="-"){

    resultado=primerNumero - variable;

    }

    if(opCode=="/"){

        if (variable==0){

            resultado="no se puede dividir por 0"
        }
            else{

                resultado=primerNumero / variable
            }

       

    }
    
     document.getElementById("texto").textContent=resultado
         document.getElementById("texto2").textContent= primerNumero+ opCode+ variable+"="
         variable=resultado
}





