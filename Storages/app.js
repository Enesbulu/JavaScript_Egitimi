//_ Secion Storage Kullanımı
//#region //? Secion Storage 
//storage'a eklenen değerler her zaman string olarak eklenir, int veya başka bir değer ile set edilse bile string olarak eklenir.

//#region  Değer ekleme
// sessionStorage.setItem("350","Enes");
// sessionStorage.setItem("216","Ahmet");
// sessionStorage.setItem("300","Murat");
// sessionStorage.setItem(500,37);
//#endregion

//#region Değer Silme
// sessionStorage.removeItem("350","Enes");
//#endregion

//#region Değer Çekme
// let value = sessionStorage.getItem("216");
// if (value===null) console.log("Değer Bulunamadı");
// console.log(value);
//#endregion

//#region Her şeyi silme
// sessionStorage.clear()

//#endregion


//#region int veri eklemeye çalışma
// value = sessionStorage.getItem(500);
// console.log(typeof value);
//#endregion


//#region Session Storage - Array Yazdırma
// let names = ["Ali","Veli","Hasan","Adem","Kübra"];
// sessionStorage.setItem("names",JSON.stringify(names));  //array olarak storages'a eklendi.


// let arrayValue =JSON.parse(sessionStorage.getItem("names"));    //Storage'dan çekilen veriyi json'a parse ederek array olarak çeker 
// console.log(arrayValue);
// console.log(typeof arrayValue);
// arrayValue.forEach(element => {
//     console.log(element);
// });
//#endregion

//#endregion


//_ Locale Storage Kullanımı
//#region //? Locale Storage 

//#region Değer Ekleme
localStorage.setItem("motion1","Push Up");
localStorage.setItem("motion2","Barfix");
localStorage.setItem("motion3","Burpee");
localStorage.setItem("motion4","Squat");

//#endregion

//#region Değer Alma
let value = localStorage.getItem("motion1");
console.log(value);
console.log(typeof value);
//#endregion

//#region Değer Silme
// localStorage.removeItem("motion4");
//#endregion

//#region Tümünü Silme
// localStorage.clear();
//#endregion

//#region Array Olarak Ekleme
let motions =["Push up","Barfix","Burpee","Squat","Chin Up"];
localStorage.setItem("motions",JSON.stringify(motions));
//#endregion

//#region Array olarak Veri çekme
let arrayMotions=JSON.parse(localStorage.getItem("motions"));

console.log(arrayMotions);
console.log(typeof arrayMotions);
arrayMotions.forEach(element => {
    console.log(element)
});

//#endregion




//#endregion
