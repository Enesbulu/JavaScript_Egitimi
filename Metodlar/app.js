/**
 * //
 */

//? Parametresiz Void metod tanımlama
function yazdir() {
    console.log("Merhaba dünya!");
}

yazdir();

//? Parametreli Void metod tanımlama
function topla(a, b) {
    console.log(a + b);
}
topla(5, 8);
topla("5", "8");

//? Parametreli Void metod tanımlama (string concatenation)
function topla2(a, b) {
    console.log(a + "" + b);
}
topla2("a", "b");

//? Parametreli Geriye değer döndüren metod tanımlama (default parametre)
function name(isim) {
    return "Hoşgeldin " + isim;
}

console.log(name("Enes"));


//? Parametresiz Geriye değer döndüren metod tanımlama 
function Selamla() {
    return "Selam, Nasılsın?";
}
console.log(Selamla());