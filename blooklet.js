// -------------------------------
// BLOOKLET #1
// -------------------------------
// <>
// EJERCICIO 1

// let nombre = "Homero";
// let apellido = "Simpson";
// let edad = 43;

// EJERCICIO 2

// const ciudad1 = "Buenos Aires";
// const ciudad2 = "Rosario";
// const ciudad3 = "Córdoba";
// const ciudad4 = "Mendoza";
// const ciudad5 = "Santa Fé";

// EJERCICIO 3

// let nombreCarnet = "Esteban";
// let apellidoCarnet = "Lissandrello";
// let domicilioCarnet = "Montes de Oca 253";
// let paisCarnet = "Argentina";
// let nacimientoCarnet = "10/02/1989";
// let sexoCarnet = "M";
// let vencimientoCarnet = "30/11/2027";

// let carnet =
//   (nombreCarnet + " " + apellidoCarnet + " " +
//   domicilioCarnet + " " + paisCarnet + " " +
//   nacimientoCarnet + " " + sexoCarnet + " " +
// vencimientoCarnet);

// console.log(carnet);

// EJERCICIO 4

// let nombrePropio = prompt("Cuál es tu nombre?")
// let nombrePadre = prompt("Cómo se llama tu papá?")
// let nombreMama = prompt("Cómo se llama tu mamá?")
// let nombreEsposa = prompt("Cómo se llama tu esposa?")
// let nombreHijo = prompt("Cómo se llaman tus hijos?")

// let datosFamilia = ("Tu nombre:" + " " + nombrePropio + " " + "Nombre de tu papá:" + " " + nombrePadre + " " + "Nombre de tu mamá:" + " " + nombreMama + " " + "Nombre de tu esposa:" + " " + nombreEsposa + " " + "Nombre de tu hijo:" + " " + nombreHijo)

// alert("Los integrantes de tu familia son:" + datosFamilia)

// EJERCICIO 5

// let precio1 = parseInt(prompt("Cuál es valor promedio de una caja de leche?"));
// let precio2 = parseInt(prompt("Cuál es el valor de su pasta de dientes?"));
// let precio3 = parseInt(prompt("Cuál es el valor de la yerba que consume?"));
// let precio4 = parseInt(prompt("Cuál es el valor de la manteca que consume?"));
// console.log(precio1);
// console.log(precio2);
// console.log(precio3);
// console.log(precio4);

// let totalPrecios = precio1 + precio2 + precio3 + precio4;

// alert(
//   "Si usted compra estos productos en nuestra tienda, le haremos un descuento del 30%, quedándole un total de: " +
//     totalPrecios - (0.30 * 100)
// );

// console.log(totalPrecios)
// </>

// -------------------------------
// BLOOKLET #2
// -------------------------------

// EJERCICIO 1

// let nombreCreado = "Esteban"

// let nombreRequerido = prompt("Ingresa tu nombre: ")

// if (nombreRequerido == nombreCreado) {
//     alert("Fui yo... ;)")
// } else {
//     alert("Yo no fuí... S(")
// }

// EJERCICIO 2

// var letra = prompt("Ingrese sólo una letra: ")

// while (!(letra.length == 1)) {

//     alert("Ingrese SOLO una letra");
//     letra = prompt("Ingrese sólo una letra: ")

//   }

// function checkCase(c){
//     var u = c.toUpperCase();
//     return (c.toLowerCase() === u ? -1 : (c === u ? 1 : 0));
// };

// if (checkCase (letra) == 1) {
//     alert("Es mayuscula")
// } else {
//     alert("Es minúscula")
// }

// EJERCICIO 3
// let pedido =
//   "Elige un personje de los Simpson \n" +
//   "1 - Homero \n" +
//   "2 - Marge \n" +
//   "3 - Bart \n" +
//   "4 - Lisa \n";
// let respuesta;

// let numeroPedido = prompt(pedido);
// let otroPedido = numeroPedido;

// let numero1 = "1";
// let numero2 = "2";
// let numero3 = "3";
// let numero4 = "4";

// let nombre1 = "Homero";
// let nombre2 = "Marge";
// let nombre3 = "Bart";
// let nombre4 = "Lisa";

// if (numeroPedido == numero1) {
//   respuesta = alert(`El personaje que elegiste es: ${nombre1}`);
// } else if (numeroPedido == numero2) {
//   respuesta = alert(`El personaje que elegiste es: ${nombre2}`);
// } else if (numeroPedido == numero3) {
//   respuesta = alert(`El personaje que elegiste es: ${nombre3}`);
// } else if (numeroPedido == numero4) {
//   respuesta = alert(`El personaje que elegiste es: ${nombre4}`);
// } else if (numeroPedido > numero4 || numeroPedido <= "0") {
//   alert("El valor es incorrecto, por favor selecciones un número del 1 al 4");
// }

// EJERCICIO 4

// let costoPresupuesto = prompt("Hola, coloca el monto del presupuesto: ")

// let valor1 = "1000"
// let valor2 = "3000"

// let resultado = parseInt(costoPresupuesto);

// if(resultado <= valor1){
//   alert("Tu presupuesto es bajo, debes trabajar más.")
// } else if (resultado > valor1 && resultado <= valor2){
//   alert("Tu presupuesto es un punto medio. Vas bien, pero puedes hacerlo mejor.")
// } else if (resultado > valor2){
//   alert("Tu presupuesto es alto. Muy bien, sigue así.")
// }


// EJERCICIO 5

//   nombreProducto1 = prompt("Dinos cual es tu producto con máxima prioridad para estas fiestas:")
//   nombreProducto2 = prompt("Dinos cual es tu producto con prioridad para estas fiestas:")
//   nombreProducto3 = prompt("Dinos cual es tu producto con prioridad media para estas fiestas:")
//   nombreProducto4 = prompt("Dinos cual es tu producto con baja prioridad para estas fiestas:")
//   nombreProducto5 = prompt("Dinos cual es tu producto con mínima prioridad para estas fiestas:")


// if ((nombreProducto1 != "") || (nombreProducto2 != "") || (nombreProducto3 != "") || (nombreProducto4 != "") || (nombreProducto5 != "")) {

//   let productosSeleccionados = (nombreProducto1 + ", " + nombreProducto2 + ", " +  nombreProducto3 + ", " +  nombreProducto4 + "y " +  nombreProducto5 + ".")
//   alert("Los productos seleccionados son: "+ productosSeleccionados)

// } else {
//   alert("Error. No se registró ningún producto")
// }



