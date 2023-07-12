// Mi Primera Página Con JavaScript
{
alert("¡Bienvenido al sitio!");
let nombre = prompt("ingresa tu nombre:");
let saludo = "Hola, " + nombre;
console.log(saludo);

let edad = prompt("Por favor, ingresa tu edad:");
let mensajeEdad = "Tu edad es: " + edad;
console.log(mensajeEdad);

let mensajeFinal = "Hola " + nombre + ", tienes " + edad + " años.";
alert(mensajeFinal); 
}

// Mensaje Con 

{
let nombre = "Juan";
let edad = 25;
let cumpleaños = "15 de mayo";
let ciudad = "Buenos Aires";
let ocupacion = "Ingeniero";
let pasatiempos = "leer y jugar al fútbol";

console.log("Hola, soy " + nombre + ". Tengo " + edad + " años y mi cumpleaños es el " + cumpleaños + ".");
console.log("Vivo en " + ciudad + " y soy " + ocupacion + ".");
console.log("En mi tiempo libre me gusta " + pasatiempos + ".");

let variable1 = 10, variable2 = "Hola", variable3 = true; 
}


// Cantidad De Caracteres
{
let cantidad = prompt('Ingrese un pequeño texto')
console.log(cantidad.length) 
}

// Calculadora De Edad
{ 
let edad = prompt('ingrese su edad')
let dias = edad * 365
console.log('viviste ' + dias + ' dias') 
}

// Suma De Valores
{
let num1, num2, resultado;

num1 = prompt("Ingresa el valor de num1:");
num2 = prompt("Ingresa el valor de num2:");

resultado = parseInt(num1) + parseInt(num2);
console.log("El resultado de la suma es:", resultado); 
}

// Calculador De Abastecimiento De Por Vida
{ 
let edad = parseInt(prompt('¿Cuántos años tienes?'));
let edadMaxima = 100;
let snack = "lays";
let cuantosSnacks = parseInt(prompt('¿Cuántos snacks comes al día?'));
let precio = 10;

let snacksNecesarios = (edadMaxima - edad) * cuantosSnacks * 365;

console.log('Necesitas un total de ' + snacksNecesarios + ' snacks de ' + snack + ' para que te alcancen hasta los ' + edadMaxima + ' años.');

let costoTotal = snacksNecesarios * precio;

console.log('Si cada snack cuesta $' + precio + ', necesitarás $' + costoTotal + ' en total.'); 
}

// Calculador De Abastecimiento De Por Vida
{
let dias = parseInt(prompt('cuandos dias te vas?'));
let presupuestoMaximo = parseInt(prompt('cuandos dinero te llevas?'));
let comida = parseInt(prompt('cuantas comidas vas a comer al dia?'));

let precio = presupuestoMaximo / (comida * dias)
console.log('Podés gastar ' + precio + ' en cada comida para que te alcance la plata durante los ' + dias + ' días de viaje')
}