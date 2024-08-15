//_ Fetch Api

//#region Get istekleri nasıl atılır
// function getStudents(url) {
//     fetch(url)
//         .then(response => { return response.json() })
//         .then(data => console.log(data))
//         .catch(err => console.log(err));

// }

// getStudents("student.json");


//************ */

// function getData(url) {
//     fetch(url)  //bir promise döner.
//         .then(response => response.json() //dönen promise içerinde bulunan protype'ın içerisinde bulunaan json nesnesi gerekli, onu burada alıyoruz.
//         )
//         .then(data => console.log(data))    //burada json içerisinde bulunan veriyi dönüyor artık.
//         .catch(err => console.log(err));    //tüm bu işlemlerde oluşabilecek hataları yönetir.
// }


// getData("https://jsonplaceholder.typicode.com/users");



// function getData2(url) {
//    return fetch(url);  //bir promise döner.
// }

// getData2("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(response => console.log(response));   //alternatif oalrak bu şekilde de dönen promis içerisinde bulunan json nesnesine ulaşım sağlanabilir.

//#endregion

//#region Post İstekleri nasıl atılır.

function saveStudents(){
    fetch("https://jsonplaceholder.typicode.com",{
        method: "POST",
        headers:{
            "Contents-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

let data = {
    "id": 4,
    "firstname": "Nurgül",
    "lastname": "Seydim",
    "age": 23
};

//#endregion

















