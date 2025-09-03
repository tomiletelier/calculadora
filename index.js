let variable= "";
let primerNumero= "";
let opCode= "";


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

         document.getElementById("texto2").textContent= primerNumero+ opCode+ variable+"="

    switch (opCode) {

        case "+":
             variable = Number(primerNumero) + Number(variable);
    
        break;
    

        case "-":

            variable = primerNumero - variable;

        break;

        case "/":

            variable= dividir (primerNumero,variable)

            break;

            case "*":

                variable*=primerNumero;

            break;

            default:
        }


     document.getElementById("texto").textContent= variable


}


function dividir (primerNumero, variable){

        if (variable==0){

         return "no se puede dividir por 0"
        }
         
        return primerNumero / variable
         }


function ultimoDigito(){

variable=variable.slice(0,-1);

document.getElementById("texto").textContent=variable;

}


function multiploDos(){

    variable**=2;

document.getElementById("texto"). textContent=variable;

}


function borrarTodo(){
    variable=""
    primerNumero=""

document.getElementById("texto"). textContent=0;
document.getElementById("texto2"). textContent="";
}



function invertir(){

if(variable>0){

variable="-"+variable;
document.getElementById("texto").textContent=variable;
}

else{

        variable=variable.slice(1);

document.getElementById("texto").textContent=variable;

}
}

function borrarAbajo(){
        variable=""
        document.getElementById("texto").textContent =0

}


const coma=()=>{

if (variable==""){
variable+="0."
document.getElementById ("texto").textContent=variable;

}

if(!variable.includes(".")){
variable+=".";
document.getElementById ("texto").textContent=variable;
}
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////
let tengoHambre=false
let tengoSueño=true

    if (tengoHambre || tengoSueño) {

console.log ("voy a comer y me voy a dormir")}

else{

    console.log ("no como ni me duermo")
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////


