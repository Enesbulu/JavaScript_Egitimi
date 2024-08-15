//_ CALLBACK Nedir?
//? Callback : Bir fonksiyonun bir fonksiyona parametre geçerek asenkron yapıyı senkrona çeviririz.

function getName(callback) {
    setTimeout(() => {
        let name = "Enes ";  //servisten gelen isim bilgisi
        callback(name);
    }, 800);
}

function getSurname(name, callback2) {
    setTimeout(() => {
        let surname = "Bulut"
        callback2(surname);
    }, 500);
}


const a = () => {

}

function getAge(name, surname, callback) {
    setTimeout(() => {
        let age = 25;
        callback(age);
    }, 300);
}



// getName(getSurname); //getName fonksiyonu, getSurname fonksiyonuna parametre olarak geçirdik ve asenkron yapıya sahiptir.



getName((name) => {
    getSurname(name, (surname) => {
        getAge(name, surname, (age) =>
            console.log(name + " " + surname + " " + age))
    }); //getSurname fonksiyon
});




