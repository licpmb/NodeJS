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

function Auto(marca,modelo,año,color) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;
  this.color = color;
  this.dataAuto = function () {
   console.log(`Tengo un auto ${this.marca} ${this.modelo}, año ${this.año} y de color ${this.color}.`) 
  }
}

const auto1 = new Auto ("Ford","Fiesta",2018,"Rojo");
const auto2 = new Auto ("Mitsubishi","Lancer",2020,"Gris");
auto1.dataAuto();
auto2.dataAuto();

// Con función flecha => El valor de this es undefined en entornos fuera del navegador o apunta al objeto global window en navegadores. Hay que utilizar el nombre (en este caso hero en lugar de this)

// const hero = {
//   alias: "Cody",
//   universe: "TechLab",
//   powers: ["fly", "nightvision", "stregth"],
//   hit: 128,
//   vitality: 100,
//   decreaseVitality: (damage) => hero.vitality - damage,
// };

// // Class => Contiene parámetros (constructor) y métodos (login como ejemplo)

// class User {
//   constructor(name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//   }
//   login(inputEmail, password) {
//     return this.email === inputEmail && this.password === password
//       ? "Login successful!"
//       : "Invalid email or password.";
//   }
// }

// // Las clases pueden Extender su extructura a otras clases, aplicando el formato directamente. Acá "Seller" hereda métodos y propiedades de "User"

// class Seller extends User {
//   constructor(name, email, password, store, sells, incomes) {
//     super(name, email, password);
//     this.store = store;
//     this.sells = sells;
//     this.incomes = incomes;
//   }
//   addNewSale(amount) {
//     this.sells += 1; // Incrementa el contador de ventas
//     this.incomes += amount; // Agrega el monto al total de ingresos
//     return `Sale added! Total sales: ${this.sells},
// Total incomes: ${this.incomes}`;
//   }
// }

// class Buyer extends User {
//   constructor(name, email, password, address, purchases, balance) {
//     super(name, email, password);
//     this.address = address;
//     this.purchases = purchases;
//     this.balance = balance;
//   }
//   makePurchase(amount) {
//     if (this.balance >= amount) {
//       this.balance -= amount; // Resta el monto del balance
//       this.purchases += 1; // Incrementa el contador de compras
//       return `Purchase successful! Remaining balance:
// ${this.balance}`;
//     } else {
//       return "Insufficient balance.";
//     }
//   }
// }

// // Una vez declarados, podemos crear instancias de cualquiera de ellos:

// const user1 = new User("John", "j@correo.com", "jhon123");
// const seller1 = new Seller("Juan", "j@correo.com", "juan123", "centro", 0, 0);
// const buyer1 = new Buyer("Caro", "c@correo.com", "caro123", "Calle 123", 0, 0);

// seller1.login("j@correo.com", "juan123");
// buyer1.login("c@correo.com", "caro123");


// // Operadores Avanzados

// // Destructuring operator: permite extraer valores de arrays o propiedades de objetos y asignarlos a variables de manera rápida y sencilla

// // En Arrays

// const numeros = [1, 2, 3];
// const [primero, segundo, tercero] = numeros;
// console.log(primero); // 1
// console.log(segundo); // 2
// console.log(tercero); // 3

// // En Objetos: los nombres de las variables deben ser idénticos a los de las propiedades del objeto

// const persona = {
//   nombre: "Ana",
//   edad: 25,
// };
// const { nombre, edad } = persona;
// console.log(nombre); // Ana
// console.log(edad); // 25

// // Otras funciones:
// /* Utilizar valores predeterminados en caso que el objeto no posea esa propiedad */
// const { apellido = "No especifcado" } = persona;
// console.log(apellido); // No especificado
// /* Renombrar propiedades, en caso que ya exista una variable con ese nombre */
// const { nombre: nombrePersona } = persona;
// console.log(nombrePersona); // Ana

// /* Destructuring anidado, para cuando tenemos
// objetos de más de 1 nivel de profundidad */
// const usuario = {
// info: {
// nombre: "Luis",
// edad: 30
// }
// };
// const { info: { nombre, edad } } = usuario;
// console.log(nombre); // Luis

// // Spread operator (...) Los 3 puntitos

// /* Combinar 2 o más arrays */
// const a = [1, 2];
// const b = [3, 4];
// const combinado = [...a, ...b];
// console.log(combinado); // [1, 2, 3, 4]
// /* Clonar o copiar un array */
// const original = [1, 2, 3];
// const copia = [...original];
// console.log(copia); // [1, 2, 3]

// /* Combinar 2 o más objetos */
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const combinado = { ...obj1, ...obj2 };
// console.log(combinado); // { a: 1, b: 2, c: 3, d: 4 }
// /* Clonar o copiar un objeto */
// const original = { a: 1, b: 2 };
// const copia = { ...original };
// console.log(copia); // { a: 1, b: 2 }


// Ejercicios Clase 4

const autos = [
  { marca: "Toyota", modelo: "Corolla", año: 2020, color: "rojo" },
  { marca: "Honda", modelo: "Civic", año: 2019, color: "azul" },
  { marca: "Ford", modelo: "Focus", año: 2017, color: "blanco" },
  { marca: "Chevrolet", modelo: "Malibu", año: 2021, color: "negro" },
  { marca: "Nissan", modelo: "Sentra", año: 2018, color: "rojo" },
  { marca: "Volkswagen", modelo: "Jetta", año: 2022, color: "gris" },
  { marca: "Kia", modelo: "Forte", año: 2023, color: "negro" },
  { marca: "Hyundai", modelo: "Elantra", año: 2016, color: "azul" },
  { marca: "Mazda", modelo: "3", año: 2020, color: "blanco" },
  { marca: "BMW", modelo: "Serie 3", año: 2024, color: "rojo" },
];

console.log(autos);

// Filtrar los autos cuyo año es mayor a 2018
const autosFiltrados = autos.filter(auto => auto.año > 2018);

// Recorrer el array filtrado e imprimir los datos de cada auto
console.log(`Los autos con modelo mayor al 2018 son:`);
autosFiltrados.forEach(auto => {
  console.log(`Marca: ${auto.marca}, Modelo: ${auto.modelo}, Año: ${auto.año}, Color: ${auto.color}`);
});