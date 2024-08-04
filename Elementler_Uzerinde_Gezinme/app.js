//_ HTML elementleri üzerinde gezinme
const todo = document.querySelector(".list-group-item");
const todoList = document.querySelector(".list-group");
// const card =document.getElementsByClassName("card");
const card = document.querySelector(".card");
const todoLastChild = document.querySelector(".list-group-item:nth-child(4)");  //son li elementi
const row = document.querySelector(".row");

let value;


//Ebeveynden çocuklara erişmek => todolist elementi ebeveyn

value = todoList;
value = todoList.children;   //child ları foreach ile dönülebilir.
value = todoList.children[0]; //child -> 1. indexdeki 
value = todoList.children[todoList.children.length - 1]; //child ->son çocuk alınabilir.
value = todoList.children[3].textContent = "Değişti";
value = Array.from(todoList.children);

// value.forEach(function(todo)  {
//     console.log(todo);
// });


value = todo;
let ul = todo.parentElement;  //parent elementi getirir.
let cardBody = ul.parentElement;    // üst parent elementi seçer.

let cardElement = cardBody.parentElement;    //üç üst parent elementi seçer.

let row1 = cardElement.parentElement;
// value= todo.parentElement.parentElement.parentElement.parentElement;    //dört üst parent elementi seçer.
let container = row.parentElement;


//? Kardeşler arasında gezinme


value = todo;   //birinci element
let value2= todo.nextElementSibling;    //ikinci element
let value3= value2.nextElementSibling; //   3. li elementini verir --Kardeşler arasında

value = todoLastChild.previousElementSibling;    //önceki elementi alır - 3 . li elementini verir --Kardeşler arasında
// console.log(value);


//? Todolist başlığını seçerek değiiştirme 
value = row.children[0].children[3].children[0].textContent="TodoList başlığı değişti";



let todo3 ;
todo3= row.children[0].children[3].children[2].children[2];
todo3.textContent="todo3 Değişti";
todo3.style.backgroundColor= "Red";
todo3.style.color="lightBlue";

console.log(value);




