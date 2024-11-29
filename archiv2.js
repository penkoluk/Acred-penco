var alojamiento = prompt("ingresa los gastos para alojamiento:");
var alimentacion = prompt("ingresa los gastos para alimentación:");
var entretenimiento = prompt("ingresa los gastos para entretenimiento:");

var total = parseFloat(alojamiento) + parseFloat(alimentacion) + parseFloat(entretenimiento);
console.log("el coste total del viaje es " + total);
