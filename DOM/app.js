//__ Selector Seçiciler
//* classname, id, tag name

//getElementById : id ye göre elementi yakalar
// let value;
// const button = document.getElementById("todoAddButton");    //Elementin id bilgisi ile yakalanması sağlanır.

// console.log(button);

// console.log(button.getAttribute("id")); //etiketin id attribute bilgisini yazdırır.
// console.log(button.getAttribute("class"));  //etiketin class attribute bilgisini yazdırır -bir yada bütün class bilgilerini-.

// const classList = button.classList; //elementin class isimlerini liste olarak döner.
// console.log(classList);
// classList.forEach((item) => console.log(item));

// let buttonText = button.textContent;    //seçilen elementi string olarak alıyor.
// console.log(buttonText);
// let buttonText2 = button.innerHTML; //Seçilen elementi html olarak alıyor.
// console.log(buttonText2);


// const todolist = Array.from(document.getElementsByClassName("list-group-item"));
// todolist.forEach((todo) => console.log(todo.textContent));
// console.log()
// //getElementsByClassName : class ismi ile elementleri yakalar


// document.getElementsByTagName("form").forEach((element)=>console.log(element));
const forms = Array.from(document.getElementsByTagName("form"));
// forms.forEach(function(form){console.log(form);});
// console.log(forms[1]);
// console.log(typeof forms);
// forms.forEach(function(form){console.log(form );});

const todoList = document.getElementsByTagName("li");
console.log(todoList)

//? querySelector -- querySelectorAll   => getElementsByClassName - getElementsByTagName -  getElementsById  işlemlerini karşılayabilen metodlar.
const clearButton = document.querySelector("#todoClearButton");
console.log(clearButton);

const todoList2 = document.querySelector(".list-group");
console.log(todoList2);

const todoList3 = document.querySelector(".list-group-item");    //Class ismi kullanılan bir adet elementi çeker.
console.log(todoList3);

const todoList4 = document.querySelectorAll(".list-group-item");    //Class ismi kullanılan bütün elementleri çeker.
console.log(todoList4);

const todoList5 = document.querySelectorAll(".list-group-item")[3];    //Class ismi kullanılan bütün elementlerin içerisinden verilen indisteki elementi çeker. -1
console.log(todoList5);

const todoList6 = document.querySelector("li:first-child"); // li elementlerinden ilk çocuğu getirir.
console.log(todoList6);

const todoList7 = document.querySelector("li:last-child"); // li elementlerinden son çocuğu getirir.
console.log(todoList6.textContent);

const todoList8 = document.querySelector("li:nth-child(2n+1)"); // li elementlerinden 2şer artarak gelenin ilk çocuğu getirir.
console.log(todoList8.textContent);

const todoList9 = Array.from(document.querySelector("li:nth-child(even)"));
todoList9.forEach((todo) => todo.style.backgroundColor ="lightgrey");
console.log(todoList9);






