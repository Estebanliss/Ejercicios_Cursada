// let nombre = "Esteban";
// let apellido =  "Lissandrello";
// let edad = 37;

// let nombreCompleto = nombre + " " + apellido;

// //PROMP

// let nombreEstudiante = prompt("Cuál es tu nombre?");

// //CONSOLE LOG

// console.log(nombreCompleto);
// console.log(nombreEstudiante);

// EJERCICIO HECHO EN AFTER CLASS
// const PRECIO_OREO = 1 // Snake-case
// const PRECIO_KITKAT = 1.5 // Snake-case
// const PRECIO_BROWNIE = 0.75 // Snake-case
// const PRECIO_LACASITOS = 0.95 // Snake-case
// const PRECIO_HELADO_BASE = 1.9 // Snake-case

// const OPCION_OREO = '1'
// const OPCION_KITKAT = '2'
// const OPCION_BROWNIE = '3'
// const OPCION_LACASITOS = '4'
// const OPCION_SIN_TOPPING = '5'

// const mensajeToppings =
//   "Ingrese el numero de una de las siguientes opciones:\n" +
//   "1. El topping de oreo cuesta 1€.\n" +
//   "2. El topping de KitKat cuesta 1.50€.\n" +
//   "3. El topping de brownie cuesta 0.75€.\n" +
//   "4. El topping de lacasitos cuesta 0.95€.\n" +
//   "5. Sin topping."
// let precioHelado;

// const topping = prompt(mensajeToppings);

// if (topping === OPCION_OREO) {
//     precioHelado = PRECIO_HELADO_BASE + PRECIO_OREO
// } else if (topping === OPCION_KITKAT) {
//     precioHelado = PRECIO_HELADO_BASE + PRECIO_KITKAT
// } else if (topping === OPCION_BROWNIE) {
//     precioHelado = PRECIO_HELADO_BASE + PRECIO_BROWNIE
// } else if (topping === OPCION_LACASITOS) {
//     precioHelado = PRECIO_HELADO_BASE + PRECIO_LACASITOS
// } else if (topping === OPCION_SIN_TOPPING) {
//     precioHelado = PRECIO_HELADO_BASE
// } else {
//     alert("La opción ingresada no es válida.")
// }

// if (precioHelado >= 0) {
//     alert("El precio del helado es: " + precioHelado)
// }

const HOJA1 = "A4";
const HOJA2 = "CARTA";
const HOJA3 = "OFICIO / LEGAL";
const HOJA4 = "OTRA";

const ID_HOJA1 = 1;
const ID_HOJA2 = 2;
const ID_HOJA3 = 3;
const ID_HOJA4 = 4;

const consulta =
  "¿Qué tamaño de hoja usa con regularidad?:\n" +
  "1). A4 \n" +
  "2). CARTA \n" +
  "3). OFICIO / LEGAL\n" +
  "4). OTRA \n";
var resultado;

var hojaSeleccionada = prompt(consulta);
hojaSeleccionada = parseInt(hojaSeleccionada);

//comprobacion - ingreso de opcion valida
while (
  !(
    hojaSeleccionada === ID_HOJA1 ||
    hojaSeleccionada === ID_HOJA2 ||
    hojaSeleccionada === ID_HOJA3 ||
    hojaSeleccionada === ID_HOJA4
  )
) {
  alert("Ingrese un valor válido");
  hojaSeleccionada = prompt(consulta);
  hojaSeleccionada = parseInt(hojaSeleccionada);
}

//proceso final
if (hojaSeleccionada === ID_HOJA1) {
  resultado = HOJA1;
} else if (hojaSeleccionada === ID_HOJA2) {
  resultado = HOJA2;
} else if (hojaSeleccionada === ID_HOJA3) {
  resultado = HOJA3;
} else if (hojaSeleccionada === ID_HOJA4) {
  let otroTipo = prompt("Por favor detalle que tamaño de hoja utiliza.");
  alert(`Usted trabaja con el tamaño de hoja: ${otroTipo}`);
}
if (hojaSeleccionada != ID_HOJA4) {
  alert("Usted trabaja con el tamaño de hoja: " + resultado);
}