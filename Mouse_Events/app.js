//_ Mouse Events

//DOMcontenetLoaded => sayfa yüklendiğinde çalışan event.
//load  => sayfa yüklendiğinde
//click => elemente tek tıklandığında 
//dblclick  => elemente çift tıklandı
//mouseover => elementin üstüne geldiğinde çalışır, hem yakalanın element hem de içinde bulunan elementler üzerine gelindiğinde çalışır
//mouseout  => elementin üstünden çıktığında çalışır. hem yakalanın element hem de içinde bulunan elementler üzerinden ayrılınca  çalışır
//mouseenter    => seçilen elementin üzerine girince çalışır. içerisinde bulunan diğer elementler için tekrardan çalışmaz.
//mouseleave    => seçilen elementin üzerinden ayrılınca çalışır. içerisinde bulunan diğer elementler için tekrardan çalışmaz.

const cardTitle = document.querySelectorAll(".card-title")[1];
const cardBody = document.querySelectorAll(".card-body")[1];


//#region DOMContentLoaded
// document.addEventListener("DOMContentLoaded", run);
// function run() {
//     console.log("Sayfa yüklendi");
// }
//#endregion

//#region load
// window.addEventListener("load", run);   //window yüklendiğinde çalıştır.

// function run() {
//     console.log("Sayfa yüklendi");
// }
//#endregion

//#region click
// cardTitle.addEventListener("click", run);    // elementin üstüne bir kere tıklayınca çalışır

// function run(e) {
//     console.log("Title'a tek Tılandı");
//     console.log(e.type);  //tıklanan elementi verir
// }
//#endregion

//#region dblclick
// cardTitle.addEventListener("dblclick", run); //elemente çift tıklandığında çalışır
// function run(e) {
//     console.log("Title'a çift Tılandı");
//     console.log(e.type);  //tıklanan elementi verir
// }
//#endregion

//#region mouseover
// cardBody.addEventListener("mouseover",run);
// function run(e) {
//     console.log("Body üstüne gelindi");
// }
//#endregion

//#region mouseout
// cardBody.addEventListener("mouseout",run);
// function run(e) {
//     console.log("Body üstünden çıktı");
// }
//#endregion

//#region mouseenter
cardBody.addEventListener("mouseenter",run);
function run(e) {
    // console.log("Body üzerine girildi");
    console.log(e.type); //tıklanan elementi
}

//#endregion

//#region mouseleave

cardBody.addEventListener("mouseleave",run);
function run(e){
    console.log(e.type);
}

//#endregion
