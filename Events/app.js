//_ Event (Olay)
//! addEventListener()


const clearButton= document.querySelector('#todoClearButton');

// clearButton.addEventListener("click",function(){
//     alert("Merhaba");
// });




function changetitle(e){    // e ile tetiklenen event objesini verir.
    // document.querySelectorAll('.card-title')[1].textContent ="Todo Başlığı Değişti";
    // console.log("BAşlık Değişti");
    console.log(e.target);  // tetiklenmiş olan html elementini verir
    console.log(e.type);    //tetiklenen eventın tipin verir
    console.log(e.target.textContent); //tetiklenen html elementinin textContent'ini verir 
    console.log(e.target.className); // tetiklenen html elementinin classlarını verir 
}

clearButton.addEventListener("click",changetitle);  //önerilen yöntem. burada metodun parantezleri kullanılmaz, kullanılırsa şartların sağlanması beklenemeden metod çalışır.