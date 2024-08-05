//_ Elementleri Değiştirme

const cardBody= document.querySelectorAll(".card-body")[1];


const newTitle =document.createElement("h2");
newTitle.className="card-title";
newTitle.textContent="Todo Listesi - Yeni";

// console.log(cardBody.childNodes)
cardBody.replaceChild(newTitle, cardBody.childNodes[1]);    //Yeni etiketi eski etiketi(node olarak alınan) element ile değiştirme 
