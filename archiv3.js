function arearec(base, altura) {
    return base * altura * 2;
}

var base = prompt("ingresa la base del rectanglo:");
var altura = prompt("ingresa la altura del rectangulo:");

var area = arearec(base, altura);
console.log("el area del rectaangulo es: " + area);
