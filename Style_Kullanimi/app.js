//Style Özelliğini Alma.

const todo = document.querySelectorAll('.list-group-item')[0];
todo.style.color = 'white';
todo.style.backgroundColor = 'purple';
todo.style.fontWeight = 'bold';
todo.style.paddingTop= '20px';
todo.style.paddingLeft= '20px';

const todolist=document.querySelector('.list-group');

todolist.style.marginTop="60px";
todo.style.marginLeft="100px";


const clearButton = document.querySelector("#todoClearButton");
// console.log(clearButton);
clearButton.style.backgroundColor = 'red';
clearButton.style.fontWeight = 'bold';
clearButton.style.color='blue';
clearButton.style.borderRadius = '50px';
