console.log("Hola desde Node JS");

// const prices = [1221, 3345, 234];

// Funciones

// Función declarada: Disponible en todo el código
// function addition(a,b) {
//     return a+b;
// }
// Invoco la función dentro de una nueva variable
// const result = addition();
// Imprimo el resultado
// console.log(result);

// Función expresada: Disponible desde el momento que se declara, si se llama antes, dará error
// const addition = function(){
//   return a + b;
// }
// console.log(addition);

// Función Flecha
// const addition = (a,b) =>{a+b};
// Return implícito considera resultado lo que venga después de la llave
// const addition = () => a + b; // return implícito
// const addition = (a , b) => {
//   const resultado = a + b;
//   return resultado; // return explícito
// };


// HOF: Callback 
function addition(a,b) {
    return a+b;
}

function subtract(a, b) {
  return a - b;
}

function calculator(a,b,action) {
    return action(a,b);
}

calculator(20, 10, addition);
calculator(20, 10, subtract);

const PxManzana = 500;
const PxPera = 1000;
const PxBanana = 1200;
const PxKiwi = 1100;
const PxFrutilla = 600;
const PxDurazno = 890;
const PxSandia = 1300;
const PxMango = 1050;
const PxDamazco = 780;
const PxFrambruesa = 920;

const prices = [PxManzana, PxPera, PxBanana, PxKiwi, PxFrutilla, PxDurazno, PxSandia, PxMango, PxDamazco, PxFrambruesa];


const tax = 1.21;

// Mapeo de precios
const updatedPrices = prices.map((price) => price * tax);

console.log(`Los precios con impuestos son los siguientes: ${updatedPrices}.- IVA Incluido.`);

// Sumar los precios actualizados
const total = updatedPrices.reduce((total, price) => total + price, 0);

// Imprimir el total en la consola
// console.log("La sumatoria de los siguientes precios: "+ prices +" es: $"+ total);
console.log(`El importe total es de: $${total}.- IVA Incluido.`);

// Otra forma
// const total = prices.reduce((total, price) => total + price, 0);

// console.log(`El precio es: $${total * tax}.- IVA Incluido.`);

// Clase 4 - Ejercicios

const student1 = {
  name: "Juan",
  age: 30,
  active: true,
};