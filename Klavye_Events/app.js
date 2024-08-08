//_ Klavye Evenları

///keypress  =>harf ve sayılarda tetiklenen evenntır.
///keydown  =>harf ve sayılar ve diğer tüm tuşlarda çalışır.
///keyup    => tuştan elini kaldırdığında çalışan event.

//#region 
// window.addEventListener("keypress", function (event) {
//     console.log("Key Pressed: ", event.key);
// });

// window.addEventListener("keydown", function (event) {
//     console.log("Key Down: ", event.key);
// });
//#endregion



//#region keypress
// document.addEventListener("keypress",run);
// function run(event) {
//     console.log("Key Pressed: ", event.key+" -- "+event.key+" -- "+event.keyCode+" -- "+event.which);
// }

//#endregion


//#region  keydown
// document.addEventListener("keydown", run);
// function run(event) {
//     console.log("Key Down: ", event.key+" -- "+event.key+" -- "+event.keyCode+" -- "+event.which);
// }

//#endregion keyup

//#region keyup
// document.addEventListener("keyup",run);
// function  run(event) {
//     console.log("Key Up: ", event.key+" -- "+event.key+" -- "+event.keyCode+" -- "+event.which);
// }

//#endregion

//#region F5 özelliğini Engelleme Örneği
// document.addEventListener("keydown",run);
// function run(e){
//     console.log(e.keyCode);
//     if(e.keyCode===116){
//         e.preventDefault();
//         alert("F5 özelliğini engeldiniz");
//     }
// }

//#endregion


//#region Input'a girilen değerleri Title'a anlık yansıtma
const cardTitle= document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");

input.addEventListener("keypress", run);

function run(e){
    cardTitle.textContent=e.target.value;
    console.log(e.target.value);
}
//#endregion















