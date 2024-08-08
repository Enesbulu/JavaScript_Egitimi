//_ Input Events
//focus => bir input un içerisine tıklandığında çalışır.
//blur  => bir inputun içerisinden çıktığında çalışır.
//copy => bir inputun içerisinde yapılan copy işlemini yakalar. 
//paste => bir inputun içerisinde yapılan paste işlemini yakalar.
//cut   => bir inputun içerisinde yapılan ctrl+x (cut/kes) işlemini yakalar.
//select    => bir inputun içerisinde yapılan ctrl+x (cut/kes) işlemini yakalar.

const todo = document.querySelector("#todoName");


//#region focus
todo.addEventListener("focus",run);

function run(e) {
    console.log(e.type);
}

//#endregion


//#region blur
todo.addEventListener("blur",run);

function run(e) {
    console.log(e.type);
}
//#endregion


//#region copy
todo.addEventListener("copy",run);

function run(e) {
    console.log(e.type);
}
//#endregion


//#region paste
todo.addEventListener("paste",run);

function run(e) {
    console.log(e.type);
}
//#endregion


//#region cut
todo.addEventListener("paste",run);

function run(e) {
    console.log(e.type);
}
//#endregion


//#region select
todo.addEventListener("select",run);

function run(e) {
    console.log(e.type);
}
//#endregion
