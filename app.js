//DOM = DOCUMENT OBJECT MODEL

let intentos=1;
let numRandom=0;
let listaNumeros = [];
let numeroMax=10;

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML= texto;
}
function condicionesIniciales(){
    intentos=1;
    numRandom= generarNumeroSecreto();
}
function mensajesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto!' );
    asignarTextoElemento('p', 'indica un numero del 1-'+numeroMax);
}
function verificarIntento(){
    let numUser= parseInt(document.getElementById('inputNum').value);  
    
    if(numUser==numRandom){
        asignarTextoElemento('p', 'Encontraste el numero! en '+ intentos +' veces' );
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else if(numUser<numRandom){
        asignarTextoElemento('p', 'El numero secreto es mayor' );
        intentos++;
        limpiarCaja();

    }
    else if(numUser>numRandom){
        asignarTextoElemento('p', 'El numero secreto es menor' );
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    document.getElementById('inputNum').value= ''; 
}
function generarNumeroSecreto(){
    let numeroGenerado= Math.floor(Math.random()*numeroMax)+1; 

    if (listaNumeros.length==numeroMax){
        asignarTextoElemento('p', 'Ya se sortearon el total de numeros posibles' );
    }
    else{
      if(listaNumeros.includes(numeroGenerado)){
           return generarNumeroSecreto();

     } else{
           listaNumeros.push(numeroGenerado);
          return numeroGenerado;
        }
    }

}
function reiniciarJuego(){
    limpiarCaja();
    mensajesIniciales();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}


mensajesIniciales();
condicionesIniciales();





