//_ ASYNC AWAIT




//#region fetch Yapısı ile
// document.querySelector("#button").addEventListener("click", () => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((response) => response.json())
//         .then(post => {
//             // console.log(post)
//             fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//                 .then((response) => response.json())
//                 .then(comments => {
//                     console.log(comments);
//                 });
//         }
//         ).catch((err) => {
//             console.log(err);
//         });
// });
//#endregion 

//#region Async - Await ile
document.querySelector("#button").addEventListener("click", async () => {
    const responsePost = await(await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();   //asenkron olan bütün işlemler için await ile bektelme işlemi yapılır. tek satırda 2 await kullanarak json veriye de çevirlerbilir
    // const post = await responsePost.json();  //yukarıda json dönüştürmesi yapıldı ve bu adım atlanıldı.
    const responseComment = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${responsePost.id}`);//${post.id}`)
    const comments =await responseComment.json();
    console.log(comments);
});
//#endregion





























