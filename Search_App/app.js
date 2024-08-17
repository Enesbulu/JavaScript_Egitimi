const formWrapper = document.querySelector('.form-wrapper');
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput")
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#search-button");
const clearButton = document.querySelector("#clear-button");
const imageListWrapper = document.querySelector(".imagelist-wrapper");
console.log(searchInput)

runEventListeners();

function runEventListeners() {

    searchButton.addEventListener("click", search);
    form.addEventListener("submit", search);
    clearButton.addEventListener("click", clearImages);
}

///Api'ye istek atma ve result üzerinden resimlerin url bilgisini çekme 
function search(e) {
    e.preventDefault();
    const value = searchInput.value.trim();
    console.log(value);
    const token = "0UZun1M2pLfV2LESD7KKE4cy6ZG_3Cdl1W2y3ffEqa8";
    const applicationId = "644395";
    //@RequestParam -Spring - RestApi
    if (value !== null && value !== "") {


        fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
            method: "GET",
            headers: {
                Authorization: `Client-ID ${token}`
            }
        })
            .then(response => response.json())
            .then(response => {
                // console.log(response)
                Array.from(response.results).forEach(element => {
                    addImageTıUI(element.urls.small);
                });
            })
            .catch(error => console.log(error));
    }
    else {
        alert("Lütfen bir arama terimi girin")
    }
}


///Apiden Alınan url den resimleri çekme ve ui olarak ekrana listeleme
function addImageTıUI(url) {
    const div = document.createElement("div");
    div.className = "card";
    const img = document.createElement("img");
    img.setAttribute("src", url);
    img.height = "400";
    img.width = "400";

    div.appendChild(img);
    imageListWrapper.appendChild(div);
    searchInput.value = "";

}

///Temizleme butonu ile resimleri ve arama imputunun temizlenmesi
function clearImages(e) {
    e.preventDefault();
    // searchInput.value = "";
    // Array.from(imageListWrapper.children).forEach(child => child.remove());
    imageListWrapper.innerHTML = "";
}












0







