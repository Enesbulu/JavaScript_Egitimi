//Tüm elementleri seçme

const form = document.querySelector('#todoAddForm');
const addInput = document.querySelector('#todoName');
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");


let todos = [];

runEvents();    //*Uygulama burada başlıyor. MAIN Metod;

///* Event Tanımlama işlemi
function runEvents() {
    form.addEventListener('submit', addTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded);
    secondCardBody.addEventListener("click", removeTodoToUI);
    clearButton.addEventListener('click', clearAllTodos);
    filterInput.addEventListener("keyup", filterTodos);
}

///* Todo İnput işlemi
function addTodo(e) {
    const inputText = addInput.value.trim();
    if (inputText === '' || inputText === null) {
        showAlert("warning", "Lütfen boş bırakmayınız!");   //Bilgilendirme mesajı
    } else {
        addTodoToUI(inputText);     //UI ekleme
        addTodoStorage(inputText);  //Storage'a ekleme
        showAlert("success", "Başarı ile eklendi");   //Bilgilendirme mesajı
    }
    e.preventDefault();
}

///* Todo ekleme işlemi
function addTodoToUI(newTodo) {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value = "";

}

///* Storage'a ekleme
function addTodoStorage(newTodo) {
    checkTodosFromStorages();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

///* Storage'da eklenmiş verinin kontrolü
function checkTodosFromStorages() {
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

///* Bilgilendirme mesajı
function showAlert(type, message) {
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    firstCardBody.appendChild(div);

    setTimeout(() => {  //3 sn sonra alert div silme
        div.remove();
    }, 3000);
}

///*Storage'daki değerleri ekrana anlık yansıtma
function pageLoaded() {
    checkTodosFromStorages();
    todos.forEach(todo => {
        addTodoToUI(todo);
    });
}

///* Todoları Listeden  silme
function removeTodoToUI(e) {
    if (e.target.className === "fa fa-remove") {
        const todo = e.target.parentElement.parentElement;
        todo.remove();
        removeTodoFromStorage(todo.textContent);
        showAlert("success", "Todo Başarı ile silindi!");
    }
}

///* Todoları Storage'dan Silme
function removeTodoFromStorage(removeTodo) {
    checkTodosFromStorages();
    todos.forEach((todo, index) => {
        if (todo === removeTodo) {
            todos.splice(index, 1);
        }
        localStorage.setItem("todos", JSON.stringify(todos));
    });
}

///* Bütün todoları temizleme
function clearAllTodos() {
    const todoListesi = document.querySelectorAll(".list-group-item");
    if (todoListesi.length > 0) {
        // UI dan TODOları silme
        todoListesi.forEach((todo) => todo.remove());
        //Storage'dan TODO'ları silme
        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos));
        showAlert("success", "Başarılı bir şekilde silindi.");
    } else {
        showAlert("warning", "Hiç todo bulunamadı!");
    }

}

///*Filtreleme işleminin yapılması
function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase().trim();
    const todoListesi = document.querySelectorAll(".list-group-item");
    if (todoListesi.length > 0) {
        todoListesi.forEach(function (todo) {
            if (todo.textContent.toLowerCase().trim().includes(filterValue)) {
                todo.setAttribute("style", "display: block");
            } else {
                todo.setAttribute("style", "display: none !important");
            }
        });
    } else {
        showAlert("warning", "Filtreleme yapmak için en az 1 adet todo eklenmeli");
    }
}




