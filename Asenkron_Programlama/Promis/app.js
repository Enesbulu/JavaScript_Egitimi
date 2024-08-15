//_ Promis Nedir? 

/** 3 Durumu Vardı:
 *      1- Pending  => İşlem alındı
 *      2-Fullfiiled(resolve)   => başarılı işlem  . ".then" ile işlem başarısı yakalanır ve işlenir.
 *      3- rejected => Başarılı işlem.  ".catch" ile hata yakalanır ve işlenir
 *!     [try- catch benzeri bir mantık yapısı var]
 *     finally bloğu promise'nin başarılı veya başarısız olmasına göre çalışır.
 *     resolve ve reject, promise'nin başarılı veya başarısız olmasına göre çalıştırılır.
 */


let check = true;

//#region //* Promise çalışma örneği
// const promise1 = new Promise((resolve,reject)=>{
//    if (check) {
//     resolve("Promise başarılı");
//    }else{
//     reject("Promise başarısız");
//    }
// });

// console.log(promise1)
//#endregion

//#region //* Bir promise Örneği
// function createPromise(resolve, reject) {
//     return new Promise((resolve, reject) => {
//         if (check) {
//             resolve("Promise başarılı");
//         } else {
//             reject("Promise başarısız");
//         }
//     });
// }


// createPromise()
//     .then((response) =>
//         console.log(response)
//     ).catch((error) =>
//         console.log(error)
//     ).finally(() =>
//         console.log("promise final her şartta çalışır.")
//     );

//#endregion


//#region //? PROMİSE + XMLHTTPREQUEST
// function readStudent(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         try {
//             xhr.addEventListener("readystatechange", () => {
//                 if (xhr.readyState === 4 && xhr.status === 200) {
//                     try {
//                         const students = JSON.parse(xhr.responseText);
//                         resolve(students);
//                     } catch (err) {
//                         console.log("Json verisinde hata var ", err);
//                     }

//                 }
//             });
//         } catch (error) {
//             reject(error);
//         }
//         xhr.open("GET", url)
//         xhr.send();
//     });
// }

// let url = "student.json"
// readStudent("student.json")
//     .then((data) => console.log(data)).catch((error) => console.log(error));
//#endregion

//#region Url den user çekme
// function getUser(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.addEventListener("readystatechange", () => {
//             try {
//                 if (xhr.readyState === 4 && xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//             } catch (err) {
//                 reject(err)
//             }
//         });
//         xhr.open("GET", url);
//         xhr.send();
//     });
// }

// getUser("https://jsonplaceholder.typicode.com/users").then((user) => {
//     console.log(user)
//     user.forEach(element => {
//         console.log(element.name);
//     });
// })
//     .catch((error) =>
//         console.log(error))
//     .finally(() => console.log("------"));
//#endregion


//#region ilişkili istek örneği
///Users için isstek atar
// function getUser(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.addEventListener("readystatechange", () => {
//             try {
//                 if (xhr.readyState === 4 && xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//             } catch (err) {
//                 reject(err)
//             }
//         });
//         xhr.open("GET", url);
//         xhr.send();
//     });
// }

// ///commnet için istek atar
// function getCommentsByUserId(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.addEventListener("readystatechange", () => {
//             try {
//                 if (xhr.readyState === 4 && xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//             } catch (err) {
//                 reject(err)
//             }
//         });
//         xhr.open("GET", url);
//         xhr.send();
//     });
// }



// ///User bilgisi alınır ve user'ın comment bilgisi çekilir. iç içe then  kullanımı
// getUser("https://jsonplaceholder.typicode.com/users/3").then((data) => {
//     console.log(data.id);
//     return getCommentsByUserId(`https://jsonplaceholder.typicode.com/comments/${data.id}`);    //çekilen user a ait id bilgisi ile ilgili userın commit bilgisi alınıyor.
// })
//     .then(res => {
//         console.log(res.body);  //user'ın comment bilgisi yazdırılıyor.
//     })
//     .catch((error) =>   //verilen then zincirinden herhangi birisinde hata olursa burası karşılar.
//         console.log(error))
//     .finally(() => console.log("------"));  //burası her daim çalışır.
//#endregion


//#region Promise.all() kullanımı

const p1 = Promise.resolve("1. Promise Başarılı");
const p2 = Promise.resolve("2. Promise Başarılı");
const p3 = new Promise((resolve, reject)=>{
    resolve("3. promise Başarılı");
});
// const p4 = new Promise.reject("4. promise Başarısız");

Promise.all([p1, p2, p3]).then((res) => {console.log(res)}).catch((error) => {console.log});    //bütün promisler resolve ise then'e girer, bir tane bile hata varsa(reject) catch' e girer.

//#endregion





