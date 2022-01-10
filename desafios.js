// DESAFÍO #2

// const HOJA1 = "A4";
// const HOJA2 = "CARTA";
// const HOJA3 = "OFICIO / LEGAL";
// const HOJA4 = "OTRA";

// const ID_HOJA1 = 1;
// const ID_HOJA2 = 2;
// const ID_HOJA3 = 3;
// const ID_HOJA4 = 4;

// const consulta =
//   "¿Qué tamaño de hoja usa con regularidad?:\n" +
//   "1). A4 \n" +
//   "2). CARTA \n" +
//   "3). OFICIO / LEGAL\n" +
//   "4). OTRA \n";
// var resultado;

// var hojaSeleccionada = prompt(consulta);
// hojaSeleccionada = parseInt(hojaSeleccionada);

//comprobacion - ingreso de opcion valida
// while (
//   !(
//     hojaSeleccionada === ID_HOJA1 ||
//     hojaSeleccionada === ID_HOJA2 ||
//     hojaSeleccionada === ID_HOJA3 ||
//     hojaSeleccionada === ID_HOJA4
//   )
// ) {
//   alert("Ingrese un valor válido");
//   hojaSeleccionada = prompt(consulta);
//   hojaSeleccionada = parseInt(hojaSeleccionada);
// }

//proceso final
// if (hojaSeleccionada === ID_HOJA1) {
//   resultado = HOJA1;
// } else if (hojaSeleccionada === ID_HOJA2) {
//   resultado = HOJA2;
// } else if (hojaSeleccionada === ID_HOJA3) {
//   resultado = HOJA3;
// } else if (hojaSeleccionada === ID_HOJA4) {
//   let otroTipo = prompt("Por favor detalle que tamaño de hoja utiliza.");
//   alert(`Usted trabaja con el tamaño de hoja: ${otroTipo}`);
// }
// if (hojaSeleccionada != ID_HOJA4) {
//   alert("Usted trabaja con el tamaño de hoja: " + resultado);
// }

// DESAFÍO #3

// let acertijo = prompt(
//   "Adivina el siguiente acertijo \n" +
//     " \n" +
//     "¿Qué monte era el más alto del mundo antes de descubrir el Everest? \n"
// );

// while (acertijo) {
//   if (acertijo === "El Everest") {
//     alert("Muy bien, estás aceitado");
//     acertijo = false
//   } else {
//     alert("Intentalo de nuevo");
//     acertijo = prompt(
//       "Adivina el siguiente acertijo \n" +
//         " \n" +
//         "¿Qué monte era el más alto del mundo antes de descubrir el Everest? \n"
//     );
//   }
// }

// QUERIENDO HACER UN EJEMPLO

// let nombre = prompt("Dime tu nombre");
// let consulta1 = prompt("Dime cuantos asientos quieres");
// let numeroAsientos = parseInt(consulta1);
// let asientosDisponibles = 5;
// let consulta2 = prompt(
//   "Marca 1 si quieres comprar mas asientos, o marca 2 si quieres salir"
// );
// let asientos2 = prompt("Dime cuantos asientos quieres");
// let resultado = consulta1 - asientos2;

// let email;

// let numeroAsientos2 = parseInt(resultado);

// while (numeroAsientos) {
//   if (numeroAsientos <= asientosDisponibles) {
//     alert("Reservaste" + " " + numeroAsientos + " " + "asientos");
//     consulta2 = prompt(
//       "Marca 1 si quieres comprar mas asientos, o marca 2 si quieres salir"
//     );
//     if (consulta2 == 1) {
//       asientos2 = prompt("Dime cuantos asientos quieres");
//     } else if (consulta2 == "2") {
//       numeroAsientos = false;
//     } else if (consulta2 == "") {
//       alert("Por favor coloca un valor");
//     } else {
//       numeroAsientos = false;
//     }
//   } else if (numeroAsientos2 < asientosDisponibles) {
//     alert("Solamente nos quedan " + numeroAsientos2);
//     consulta2 = prompt(
//       "Marca 1 si quieres comprar mas asientos, o marca 2 si quieres salir"
//     );
//     if (consulta2 == 1) {
//       asientos2 = prompt("Dime cuantos asientos quieres");
//     } else if (consulta2 == 2) {
//       numeroAsientos = false;
//     } else if (consulta2 == "") {
//       alert("Por favor coloca un valor");
//     } else {
//       numeroAsientos = false;
//     }
//   } else {
//     alert("Lo sentimos, no nos quedan mas lugares");
//   }
// }

// QUERIENDO HACER UN LOGIN

// ------------------ ETAPA DE REGISTRO ------------------

// let resgistroNombre = prompt(
//   "Hola bienvenido, para registrarte te pedimos que completes los siguientes pasos: \n" +
//     "1. Dinos tu nombre"
// );

// let resgistroEmail = prompt("2. Escribe tu Email de usuario");
// let resgistroPassword = prompt("3. Escribe tu contraseña");
// let repeatPassword = prompt("4. Repite tu contraseña");

// while (repeatPassword) {
//   if (repeatPassword === resgistroPassword) {
//     alert("Hola " + resgistroNombre + ", tu cuenta fue creada con éxito.");
//     repeatPassword = false;
//   } else {
//     alert("La contraseña ingresada no es la misma. Repite la contraseña");
//     repeatPassword = prompt("4. Repite tu contraseña");
//   }
// }

// // ------------------ ETAPA DE INGRESO ------------------

// let ingresoEmail = prompt("Hola bienvenido, ingresa tu email");
// let ingresoPassword = prompt("Ingresa tu contraseña");

// while (ingresoPassword) {
//   if ((ingresoPassword === resgistroPassword) && (ingresoEmail === resgistroEmail)) {
//     alert("Hola " + resgistroNombre);
//     ingresoPassword = false;
//   } else {
//     alert("El usuario o contraseña es incorrecto. Vuelve a intentarlo");
//     ingresoEmail = prompt("Hola bienvenido, ingresa tu email");
//     ingresoPassword = prompt("Ingresa tu contraseña");
//   }
// }

// ------------------ SERVICE CANINO ------------------

// alert("Bienvenido a Mascota Online.");

// function consulta() {
//   let nombre = prompt("Cuál es el nombre de tu mascota?");
//   let raza = prompt("Qué tipo de raza es?");
//   let peso = prompt("Cuánto pesa?");
//   let edad = prompt("Cuantos años tiene?");
// }

// consulta();

// let lavado = "1";
// let corte = "2";
// let lavadoYcorte = "3";

// const LAVADO = "550";
// const CORTE = "750";
// const LAVADOYCORTE = "1300";

// function service() {
//   let serviceSeleccionado = prompt(
//     "Indique que tipo de servicio quiere contratar?\n" +
//       "1. Lavado\n" +
//       "2. Corte\n" +
//       "3. Lavado + Corte\n"
//   );

//   let serviceContratado = serviceSeleccionado;

//   if (serviceContratado === lavado) {
//     alert("Usted seleccionó el servicio de Lavado por: $" + LAVADO);
//   } else if (serviceContratado === corte) {
//     alert("Usted seleccionó el servicio de Lavado por: $" + LAVADO );
//   } else if (serviceContratado === lavadoYcorte) {
//     alert("Usted seleccionó el servicio de Lavado por: $" + LAVADOYCORTE);
//   } else {
//     alert("Gracias por su visita");
//   }
// }

// service();

// ------------------ BASE DE CANINOS ------------------

// alert("Bienvenido a Mascota Online.");

// class mascotasClientes {
//   constructor(nombre, raza, peso, edad) {
//     this.nombre = nombre;
//     this.raza = raza;
//     this.peso = peso;
//     this.edad = edad;
//   }
// }

// const MASCOTAS = [];

// for (let mascota = 0; mascota < 2; mascota++) {
//   const nombre = prompt("Cuál es el nombre de tu mascota?");
//   const raza = prompt("Qué tipo de raza es?");
//   const peso = prompt("Cuánto pesa?");
//   const edad = prompt("Cuantos años tiene?");

//   const mascota = new mascotasClientes(nombre, raza, peso, edad);
//   MASCOTAS.push(mascota);
//   console.log(mascota);
// }

// ------------------ SIMULADOR INTERACTIVO ------------------
// Utilizar tres funciones
// 1. Pedido de datos.
// 2. Selección de servicio.
// 3. Selección de horario.
// 4. Forma de pago.

// Plantillas de Objetos:

class Turno {
  constructor(mascota, servicio, horario, metodoPago) {
    this.mascota = mascota;
    this.servicio = servicio;
    this.horario = horario;
    this.metodoPago = metodoPago;
  }
}

class Mascota {
  constructor( nombre, raza, edad, peso) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
    this.peso = peso;
  }
}

// Array "Resumen"

const TURNOS = [];

// Función "Pedido de datos"
function crearMascota() {
  let nombre = prompt("Cuál es el nombre de tu mascota?");
  let raza = prompt("Qué tipo de raza es?");
  let peso = prompt("Cuánto pesa?");
  let edad = prompt("Cuantos años tiene?");

  return new Mascota(nombre, raza, peso, edad);
}

function crearTurno() {
  return new Turno(crearMascota(), service(), horario(), formaPago());
}

// Función "Selección de servicio"
function service() {
  let lavado = "1";
  let corte = "2";
  let lavadoYcorte = "3";

  const LAVADO = "550";
  const CORTE = "750";
  const LAVADOYCORTE = "1300";

  let serviceSeleccionado = prompt(
    "Indique que tipo de servicio quiere contratar?\n" +
      "1. Lavado\n" +
      "2. Corte\n" +
      "3. Lavado + Corte\n"
  );

  let serviceContratado = serviceSeleccionado;

  if (serviceContratado === lavado) {
    alert("Usted seleccionó el servicio de Lavado por: $" + LAVADO);
  } else if (serviceContratado === corte) {
    alert("Usted seleccionó el servicio de Lavado por: $" + LAVADO);
  } else if (serviceContratado === lavadoYcorte) {
    alert(
      "Usted seleccionó el servicio de Lavado y Corte por: $" + LAVADOYCORTE
    );
  } else {
    alert("Gracias por su visita");
  }
  return serviceSeleccionado;
}

// Función "Selección de horario"
function horario() {
  let manana = "1";
  let medioDia = "2";
  let tarde = "3";

  let turno = prompt(
    "En que turno desea traer a su mascota?\n" +
      "1. Durante la mañana.\n" +
      "2. Al medio día.\n" +
      "3. Durante la tarde."
  );

  let turnoDefinido = turno;

  if (turnoDefinido === manana) {
    alert("Felicidades, ya tiene un turno reservado para la mañana.");
  } else if (turnoDefinido === medioDia) {
    alert("Felicidades, ya tiene un turno reservado para el medio día.");
  } else if (turnoDefinido === tarde) {
    alert("Felicidades, ya tiene un turno reservado para la tarde.");
  }

  return turnoDefinido;
}

// Función "Forma de pago"
function formaPago() {
  let tipoPago = prompt("Cómo va a ser su forma de pago?");
  return tipoPago;
}

// Función "Consulta completa"

alert("Bienvenido a Mascota Online.");

while (true) {
  var input = prompt(
    "Selecciones una opción: \n" + " 1. Crear un turno. \n" + " 2. Salir"
  );

  if (input === "1") {
    TURNOS.push(crearTurno());
  } else {
    break;
  }
}

TURNOS.sort((a, b) => a.horario - b.horario);
console.table(TURNOS);
