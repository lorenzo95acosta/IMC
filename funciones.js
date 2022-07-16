//Funciones de calculo
let edadLimite = 65;
function IMC(peso, talla_cm){
    talla = talla_cm/100;
    return (peso/(talla*talla))
}

function valoracionAdulto (imc){
    let mensaje = '';
    if(imc< 18.5){
        mensaje = 'Bajo peso';
    }else if(imc<25){
        mensaje = 'Normal';
    }else if(imc<30){
        mensaje = 'Sobrepeso';
    }else if(imc<35){
        mensaje = 'Obesidad 1';
    }else  if(imc<40){
        mensaje = 'Obesidad 2';
    }else {
        mensaje = 'Obesidad 3';
    }
    return mensaje
}

function valoracionAdultoMayor (imc){
    let mensaje = '';
    if(imc< 23){
        mensaje = 'Bajo peso';
    }else if(imc<28){
        mensaje = 'Normal';
    }else if(imc<32){
        mensaje = 'Sobrepeso';
    }else {
        mensaje = 'Obesidad';
    }
    return mensaje
}

function mensaje(edad, imc){
    let mensaje = '';
    if(edad<65){
        mensaje = valoracionAdulto(imc)
    }else{
       mensaje = valoracionAdultoMayor(imc)
    }
    return mensaje
}

//Manejo de DOM
function display(){
    let peso = document.getElementById("peso").value;
    let talla = document.getElementById("talla").value;
    let edad = document.getElementById("edad").value;
    console.log(peso);
    console.log(talla);
    console.log(edad);
    let imc = IMC(peso, talla);
    let string = mensaje(edad, imc);
    let contenido = document.getElementById("contenido");
    contenido.innerHTML = `
    <div class="alert alert-warning" role="alert">
    El IMC para la talla de ${talla} centimetros y un peso de ${peso} kilogramos es de: ${imc.toFixed(2)} kg/m2.
    Dada la edad de ${edad} años, el estado nutricional es ${string}
  </div>
    `;
}