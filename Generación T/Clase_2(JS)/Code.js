// Mis Primeras Condicionales
{
if (true) {
    console.log("Esta sentencia siempre se ejecuta");
}
if (false) {
    console.log("Esta sentencia siempre se ejecuta");
}

let respuesta = prompt("¿Cómo estás?");
if (respuesta === "triste") {
  console.log("No te preocupes, las cosas mejorarán");
}

let numeroSecreto = 8;
let respuesta2 = parseInt(prompt("Adivina el número secreto:"));
if (respuesta2 !== numeroSecreto) {
  console.log("Lo siento, has adivinado incorrectamente el número secreto");
}

let contraseña = prompt("Ingresa la contraseña:");
if (contraseña === "contraseñaCorrecta") {
    window.open("http://www.google.com", "_blank");
}
}

// Par O Impar
{
let numero = 6;
if (numero % 2 === 0) {
    console.log("Par")
}else{
    console.log("Impar")
}
}

// Agregá Caminos
{
let edad=prompt("Ingrese su edad.")

if(edad<0){
    console.log("Está edad es invalida.");
}
else{
    if(edad<18) {
        console.log("No puede pasar al bar.");
    } 
    else if(edad<21){
        console.log("Puede pasar al bar, pero no puede tomar alcohol.");
    } 
    else{
        console.log("Puede pasar al bar y tomar alcohol.");
    }
    if(edad%2===1){
        console.log('Por cierto, su edad es impar');
    }
} 
}

// Adiviná El Número
{ 
let numeroSecreto = 8;
let respuesta = parseInt(prompt("Adivina el número secreto:"));
if (respuesta !== numeroSecreto) {
  console.log("Lo siento, has adivinado incorrectamente el número secreto");
  if (respuesta<numeroSecreto){console.log('El numero incorrecto es menor')}
  else if (respuesta>numeroSecreto){console.log('El numero incorrecto es mayor')}
}
else{
    console.log("has adivinado correctamente el numero secreto");
} 
}

// ¿Puedo Jubilarme?
{
let edad = parseInt(prompt('Ingrese su edad'));
let genero = prompt('ingrese su genero');

if (genero==="hombre"){
    if (edad<65){console.log('todavia no se puede jubilar')}
    else if (edad>=65){console.log('puede jubilarse')}
}
else if (genero==="mujer"){
    if (edad<60){console.log('todavia no se puede jubilar')}
    else if (edad>=60){console.log('puede jubilarse')}
}
}