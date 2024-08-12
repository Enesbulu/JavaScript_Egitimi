//_ SET --> içerisinde eşsiz/birbirinden farklı değerler tutar. Diğer özellikleri ile diziden farkı yoktur.

//*Tanımlanması
const set = new Set();

//#region  add Metodu
set.add(true);
set.add(3.14);
set.add("Enes");
set.add(7);
set.add(7);
set.add(7);
set.add(7);
set.add({username: "Enes", password: "test"});
set.add([1,2,3]);
//#endregion

//#region  size
console.log("boyutu : "+set.size);
//#endregion

//#region  delete
set.delete(true);
console.log("boyutu : "+set.size);
//#endregion

//#region  has --> verilen değer var mı kontrolü yapar bool değer döner
console.log(set.has(true));
//#endregion

console.log("------------------------------------------------")

//#region  For of döngüsü
for(let value of set){
    console.log(value);
}
//#endregion

console.log("------------------------------------------------")

//#region Array'e dönüştürme
const values = Array.from(set);
values.forEach(value => console.log(value));
//#endregion

console.log("------------------------------------------------")

//#region Set'den Array oluşturma 
const vals = Array.from(set);
//#endregion

//#region Array'den Set oluşturma
let array1= [1,"Enes",true,"ibrahim",25,[1,2,3]];
const newSet = new Set(array1);
console.log(newSet);
//#endregion




