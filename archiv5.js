var bandas = ["louta", "soda stereo", "el mato a un policia motorizado", "linyeras cru", "Franky Style", "Ca7riel", "queen", "divididos", "los pericos", "coldplay"];

console.log(bandas[2]);
console.log(bandas[3]);
console.log(bandas[6]);

bandas[1] = "louta";
bandas[2] = "Ca7riel";

console.log(bandas);

bandas.push("linyeras cru");

console.log(bandas);

console.log("arreglo: " + bandas.length);

bandas.sort();

console.log(bandas);

for (let i = 0; i < bandas.length; i++) {
    console.log(bandas[i]);
}
