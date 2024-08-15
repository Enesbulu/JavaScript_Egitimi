//_ Ajax Nedir? -- XMLHttpRequest Kullanımı

// const xhr = new XMLHttpRequest();
// console.log(xhr);

function prepateUrl(url) {
    if (id === null)
        return url;

    return `${url}?postId=${id}`;
}


function getComments(url, id) {
    let newUrl = prepateUrl(url, id);
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
        }
    });

    xhr.open("GET", newUrl);
    xhr.send();
}

let url = "https://jsonplaceholder.typicode.com/comments";
let id = null;
getComments(url, id);



function getData(url) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
        if(xhr.readyState === 4 && xhr.status === 200)
            console.log(JSON.parse(xhr.responseText));  
        3
        
    });
    xhr.open("GET", url);
    xhr.send();
}

let url2 = "https://jsonplaceholder.typicode.com/users";

getData(url2);
